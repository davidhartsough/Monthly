import { fetchProfile, updateName } from "../db/fb";

export const receiveProfile = (profile) => ({
  type: "receive_profile",
  payload: { profile },
});

const setName = (name) => ({
  type: "set_profile_name",
  payload: { name },
});

export const getProfile = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    return fetchProfile()
      .then((profile) => {
        if (profile) dispatch(receiveProfile(profile));
        return resolve(profile);
      })
      .catch(reject);
  });
};

export const changeName = (name) => (dispatch, getState) => {
  const { username } = getState().profile;
  return new Promise((resolve, reject) => {
    return updateName(username, name)
      .then(() => resolve(dispatch(setName(name))))
      .catch(reject);
  });
};
