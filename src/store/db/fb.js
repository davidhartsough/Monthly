import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./config";
import { currentMonth } from "../../date-utils";

let _db = null;
let _auth = null;
let _uid = null;
let _username = null;

export function initDatabase() {
  if (firebase.apps.length === 0) firebase.initializeApp(config.fb);
  _db = firebase.firestore();
  _auth = firebase.auth();
}

export const db = () => _db;

export const auth = () => _auth;

export const providers = {
  google: firebase.auth.GoogleAuthProvider,
};

export const signInOptions = [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  firebase.auth.EmailAuthProvider.PROVIDER_ID,
];

export const setUID = (uid) => {
  _uid = uid;
};

export const setUsername = (username) => {
  _username = username;
};

export const getUID = () => _uid;

function getSearchTerms(name, username) {
  const searchTerms = [
    name.toUpperCase(),
    username.toUpperCase(),
    ...name.split(" ").map((n) => n.toUpperCase()),
  ];
  return [...new Set(searchTerms)];
}

export function createProfile(name, username) {
  const newProfile = {
    name,
    username,
    uid: _uid,
    connections: [],
    requests: [],
    requested: [],
    ignored: [],
    searchTerms: getSearchTerms(name, username),
  };
  return _db
    .collection("profiles")
    .doc(username)
    .set(newProfile)
    .then(() => {
      _username = username;
      return newProfile;
    })
    .catch(console.warn);
}

export function fetchProfile() {
  return _db
    .collection("profiles")
    .where("uid", "==", _uid)
    .get()
    .then(({ docs, empty }) => {
      if (empty) return null;
      const profile = docs[0].data();
      _username = profile.username;
      return profile;
    })
    .catch(console.warn);
}

export function updateName(id, name) {
  return _db
    .collection("profiles")
    .doc(id)
    .update({
      name,
      searchTerms: getSearchTerms(name, id),
    })
    .then(() => id)
    .catch((err) =>
      console.warn(`Error updating name (${id}, ${name}) : `, err)
    );
}

export function getPeople(ids) {
  return new Promise((resolve, reject) => {
    return Promise.all(ids.map((id) => getPerson(id)))
      .then(resolve)
      .catch(reject);
  });
}

export function getPerson(id) {
  return _db
    .collection("profiles")
    .doc(id)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        throw new Error(`No profile found for: ${id}`);
      }
      return doc.data();
    });
}

export function getPeopleByQuery(query) {
  return _db
    .collection("profiles")
    .where("searchTerms", "array-contains", query)
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((err) =>
      console.warn(`Error getting people by query ("${query}") : `, err)
    );
}

const mapDocs = (doc) => ({
  id: doc.id,
  ...doc.data(),
});

export function getThisMonthsMoments() {
  return _db
    .collection("moments")
    .where("uid", "==", _uid)
    .where("month", "==", currentMonth)
    .orderBy("timestamp")
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((e) => console.warn("Error getting this month's moments: ", e));
}

export function getRecap(month, uid) {
  const auid = uid === "my profile" ? _uid : uid;
  return _db
    .collection("moments")
    .where("uid", "==", auid)
    .where("month", "==", month)
    .orderBy("timestamp")
    .get()
    .then(({ docs }) => docs.map(mapDocs))
    .catch((e) =>
      console.warn(
        `Error getting monthly moments recap (${month}, ${uid}) : `,
        e
      )
    );
}

export function createMoment(text) {
  const newMoment = {
    uid: _uid,
    month: currentMonth,
    username: _username,
    text,
    timestamp: firebase.firestore.Timestamp.now().seconds,
  };
  return _db
    .collection("moments")
    .add(newMoment)
    .then(({ id }) => ({
      id,
      ...newMoment,
    }))
    .catch((err) => console.warn(`Error creating moment: `, err));
}

export function updateMoment(id, updates) {
  return _db
    .collection("moments")
    .doc(id)
    .update(updates)
    .then(() => id)
    .catch((err) => console.warn(`Error updating moment (${id}) : `, err));
}

export function deleteMoment(id) {
  return _db
    .collection("moments")
    .doc(id)
    .delete()
    .then(() => id)
    .catch((err) => console.warn(`Error deleting moment (${id}) : `, err));
}

function requestToConnect(id) {
  const docRef = _db.collection("profiles").doc(id);
  return _db
    .runTransaction((transaction) => {
      return transaction.get(docRef).then((doc) => {
        const requests = [...doc.data().requests, _username];
        transaction.update(docRef, { requests });
        return true;
      });
    })
    .then(() => true)
    .catch((err) =>
      console.warn(`Error sending request to connect (${id}) : `, err)
    );
}

function addToMyRequested(id) {
  const docRef = _db.collection("profiles").doc(_username);
  return _db
    .runTransaction((transaction) => {
      return transaction.get(docRef).then((doc) => {
        const requested = [...doc.data().requested, id];
        transaction.update(docRef, { requested });
        return true;
      });
    })
    .then(() => true)
    .catch((err) => console.warn(`Error adding to requested (${id}) : `, err));
}

export function sendRequest(id) {
  return new Promise((resolve, reject) => {
    return Promise.all([requestToConnect(id), addToMyRequested(id)])
      .then(resolve)
      .catch(reject);
  });
}

export function addToMyIgnored(id) {
  const docRef = _db.collection("profiles").doc(_username);
  return _db
    .runTransaction((transaction) => {
      return transaction.get(docRef).then((doc) => {
        const ignored = [...doc.data().ignored, id];
        transaction.update(docRef, { ignored });
        return true;
      });
    })
    .then(() => true)
    .catch((err) => console.warn(`Error ignoring request (${id}) : `, err));
}

function addToMyConnections(id) {
  const docRef = _db.collection("profiles").doc(_username);
  return _db
    .runTransaction((transaction) => {
      return transaction.get(docRef).then((doc) => {
        const { requests, connections, ignored } = doc.data();
        const index = requests.findIndex((un) => un === id);
        requests.splice(index, 1);
        const ignoredIndex = ignored.findIndex((un) => un === id);
        if (ignoredIndex !== -1) ignored.splice(ignoredIndex, 1);
        connections.push(id);
        transaction.update(docRef, { requests, connections, ignored });
        return true;
      });
    })
    .then(() => true)
    .catch((err) => console.warn(`Error adding connection (${id}) : `, err));
}

function completeConnection(id) {
  const docRef = _db.collection("profiles").doc(id);
  return _db
    .runTransaction((transaction) => {
      return transaction.get(docRef).then((doc) => {
        const { requested, connections } = doc.data();
        const index = requested.findIndex((un) => un === _username);
        requested.splice(index, 1);
        connections.push(_username);
        transaction.update(docRef, { requested, connections });
        return doc.data();
      });
    })
    .then((person) => person)
    .catch((err) =>
      console.warn(`Error sending request to connect (${id}) : `, err)
    );
}

export function acceptRequest(id) {
  return new Promise((resolve, reject) => {
    return Promise.all([addToMyConnections(id), completeConnection(id)])
      .then(([_, person]) => resolve(person))
      .catch(reject);
  });
}
