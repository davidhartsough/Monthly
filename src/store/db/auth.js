import { auth, providers } from "./fb";
import config from "./config";
import * as Google from "expo-google-app-auth";

export function handleAuthState(handler) {
  return auth().onAuthStateChanged(handler);
}

export function emailSignIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function createUser(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function trySignInWithGoogle() {
  return new Promise((resolve) => {
    Google.logInAsync(config.google)
      .then((result) => {
        const { type, accessToken, idToken } = result;
        if (type === "success") {
          handleGoogleSignIn(idToken, accessToken).then(() => resolve(type));
        } else {
          return resolve(type);
        }
      })
      .catch(() => resolve("failure"));
  });
}

function handleGoogleSignIn(idToken, accessToken) {
  return auth()
    .signInWithCredential(providers.google.credential(idToken, accessToken))
    .catch(console.warn);
}

export function logOut() {
  return auth().signOut();
}
