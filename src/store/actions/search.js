import { getPeopleByQuery } from "../db/fb";

const requestResults = () => ({ type: "request_results" });

const receiveResults = (query, data) => ({
  type: "receive_results",
  payload: { query, data },
});

export const runQuery = (query) => (dispatch, getState) => {
  if (query === getState().search.query) {
    return;
  }
  dispatch(requestResults());
  if (query === "") {
    return dispatch(receiveResults("", []));
  }
  return getPeopleByQuery(query).then((data) => {
    return dispatch(receiveResults(query, data));
  });
};
