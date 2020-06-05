import { getRecap } from "../db/fb";

const stopLoading = () => ({ type: "stop_loading_recap" });

const requestRecap = () => ({ type: "request_recap" });

const receiveRecap = (month, uid, moments) => ({
  type: "receive_recap",
  payload: { month, uid, moments },
});

export const fetchRecap = (month, uid) => (dispatch, getState) => {
  const { recap } = getState();
  const hasFetched = recap.month === month && recap.uid === uid;
  if (hasFetched) return dispatch(stopLoading());
  dispatch(requestRecap());
  return getRecap(month, uid).then((moments) => {
    return dispatch(receiveRecap(month, uid, moments));
  });
};
