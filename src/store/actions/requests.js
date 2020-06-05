import { getPeople } from "../db/fb";

const stopLoading = () => ({ type: "stop_loading_requests" });

const requestRequests = () => ({ type: "request_requests" });

const receiveRequests = (data) => ({
  type: "receive_requests",
  payload: { data },
});

export const fetchRequests = () => (dispatch, getState) => {
  const { hasFetched } = getState().requests;
  if (hasFetched) return dispatch(stopLoading());
  dispatch(requestRequests());
  const { profile } = getState();
  const usernames = profile.requests.filter(
    (i) => !profile.ignored.includes(i)
  );
  return getPeople(usernames).then((data) => {
    return dispatch(receiveRequests(data));
  });
};
