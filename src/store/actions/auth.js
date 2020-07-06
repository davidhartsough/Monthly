import { logOut } from "../db/auth";
import {
  setUID,
  createProfile as dbCreateProfile,
  setUsername,
} from "../db/fb";
import { getProfile, receiveProfile } from "./profile";

const setLoading = () => ({
  type: "set_auth_loading",
});

export const setAuthLoading = () => (dispatch) => {
  dispatch(setLoading());
};

export const signOut = () => (dispatch) => {
  dispatch(setLoading());
  return logOut().then(() => {
    dispatch({ type: "CLEAR_STATE_RESET" });
    return dispatch({ type: "sign_out" });
  });
};

const signIn = (uid, displayName, suggestion = "", hasProfile = false) => ({
  type: "sign_in",
  payload: { uid, displayName, suggestion, hasProfile },
});

function getSuggestion(name = "", email) {
  return name
    ? name.toLowerCase().replace(/[^a-z]/g, "")
    : email
        .toLowerCase()
        .slice(0, email.indexOf("@"))
        .replace(/[^a-z]/g, "");
}

export const handleAuth = (user) => (dispatch, getState) => {
  dispatch(setLoading());
  if (user) {
    const { uid, displayName, email } = user;
    setUID(uid);
    if (getState().profile.uid === uid) {
      setUsername(getState().profile.username);
      return dispatch(signIn(uid, "", "", true));
    }
    return dispatch(getProfile()).then((profile) => {
      const suggestion = profile ? "" : getSuggestion(displayName, email);
      return dispatch(signIn(uid, displayName || "", suggestion, !!profile));
    });
  } else {
    return dispatch({ type: "sign_out" });
  }
};

const finishCreatingProfile = () => ({ type: "finish_creating_profile" });

export const createProfile = (name, username) => (dispatch) => {
  dispatch(setLoading());
  return dbCreateProfile(name, username).then((profile) => {
    dispatch(receiveProfile(profile));
    return dispatch(finishCreatingProfile());
  });
};
