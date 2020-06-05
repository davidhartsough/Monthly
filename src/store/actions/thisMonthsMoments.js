import {
  getThisMonthsMoments,
  updateMoment as dbUpdate,
  createMoment as dbCreate,
  deleteMoment as dbDelete,
} from "../db/fb";

const stopLoading = () => ({ type: "stop_loading_this_months_moments" });

const requestThisMonthsMoments = () => ({
  type: "request_this_months_moments",
});

const receiveThisMonthsMoments = (data) => ({
  type: "receive_this_months_moments",
  payload: { data },
});

const _createMoment = (created) => ({
  type: "create_moment",
  payload: { created },
});

const _updateMoment = (id, text) => ({
  type: "update_moment",
  payload: { id, text },
});

const _deleteMoment = (id) => ({
  type: "delete_moment",
  payload: { id },
});

export const fetchThisMonthsMoments = () => (dispatch, getState) => {
  const { hasFetched } = getState().thisMonthsMoments;
  if (hasFetched) return dispatch(stopLoading());
  dispatch(requestThisMonthsMoments());
  return getThisMonthsMoments().then((data) => {
    return dispatch(receiveThisMonthsMoments(data));
  });
};

export const createMoment = (text) => (dispatch) => {
  return new Promise((resolve, reject) => {
    return dbCreate(text)
      .then((newMoment) => {
        return resolve(dispatch(_createMoment(newMoment)));
      })
      .catch(reject);
  });
};

export const updateMoment = (id, text) => (dispatch) => {
  return new Promise((resolve, reject) => {
    return dbUpdate(id, { text })
      .then(() => {
        return resolve(dispatch(_updateMoment(id, text)));
      })
      .catch(reject);
  });
};

export const deleteMoment = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    return dbDelete(id)
      .then(() => {
        return resolve(dispatch(_deleteMoment(id)));
      })
      .catch(reject);
  });
};
