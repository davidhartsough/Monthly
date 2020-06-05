import { getPeople } from "../db/fb";

const stopLoading = () => ({ type: "stop_loading_connections" });

const requestConnections = () => ({ type: "request_connections" });

const receiveConnections = (data) => ({
  type: "receive_connections",
  payload: { data },
});

export const fetchConnections = () => (dispatch, getState) => {
  const { hasFetched } = getState().connections;
  if (hasFetched) return dispatch(stopLoading());
  dispatch(requestConnections());
  const usernames = getState().profile.connections;
  return getPeople(usernames).then((data) => {
    return dispatch(receiveConnections(data));
  });
};
