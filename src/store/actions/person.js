import { getPerson } from "../db/fb";

const stopLoading = () => ({ type: "stop_loading_person" });

const requestPerson = () => ({ type: "request_person" });

const receivePerson = (data) => ({
  type: "receive_person",
  payload: { data },
});

export const fetchPerson = (username) => (dispatch, getState) => {
  const hasFetched = getState().person.username === username;
  if (hasFetched) return dispatch(stopLoading());
  dispatch(requestPerson());
  return getPerson(username).then((data) => {
    return dispatch(receivePerson(data));
  });
};
