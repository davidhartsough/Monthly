import {
  sendRequest,
  addToMyIgnored,
  acceptRequest as dbAcceptRequest,
} from "../db/fb";

const _deleteRequest = (username) => ({
  type: "delete_request",
  payload: { username },
});

const _acceptRequest = (username) => ({
  type: "create_profile_connection",
  payload: { username },
});

const _createConnection = (created) => ({
  type: "create_connection",
  payload: { created },
});

const _deleteProfileIgnore = (username) => ({
  type: "delete_profile_ignore",
  payload: { username },
});

export const acceptRequest = (username) => (dispatch) => {
  return new Promise((resolve, reject) => {
    return dbAcceptRequest(username)
      .then((person) => {
        dispatch(_acceptRequest(username));
        dispatch(_deleteRequest(username));
        dispatch(_deleteProfileRequest(username));
        dispatch(_createConnection(person));
        dispatch(_deleteProfileIgnore(username));
        return resolve();
      })
      .catch(reject);
  });
};

const _deleteProfileRequest = (username) => ({
  type: "delete_profile_request",
  payload: { username },
});

const _createProfileIgnore = (username) => ({
  type: "create_profile_ignore",
  payload: { username },
});

export const ignoreRequest = (username) => (dispatch) => {
  return new Promise((resolve, reject) => {
    return addToMyIgnored(username)
      .then(() => {
        dispatch(_createProfileIgnore(username));
        dispatch(_deleteRequest(username));
        return resolve();
      })
      .catch(reject);
  });
};

const _createRequest = (username) => ({
  type: "create_profile_request",
  payload: { username },
});

export const createRequest = (username) => (dispatch) => {
  return new Promise((resolve, reject) => {
    return sendRequest(username)
      .then(() => {
        dispatch(_createRequest(username));
        return resolve();
      })
      .catch(reject);
  });
};
