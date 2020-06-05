import React, { useState } from "react";
import { connect } from "react-redux";
import { acceptRequest, createRequest } from "../../../store/actions/general";
import Loader from "../../../components/Loader";
import LinkListItem from "../../../components/LinkListItem";
import MyLinkListItem from "../../../components/MyLinkListItem";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";

function ResultListItem({
  username,
  name,
  connections,
  requested,
  requests,
  accept,
  request,
  myUsername,
}) {
  const [loading, setLoading] = useState(false);
  if (connections.includes(username)) {
    return <LinkListItem name={name} username={username} />;
  }
  if (myUsername === username) {
    return <MyLinkListItem name={name} username={username} />;
  }
  function onAccept() {
    setLoading(true);
    accept(username).then(() => setLoading(false));
  }
  function onRequest() {
    setLoading(true);
    request(username).then(() => setLoading(false));
  }
  return (
    <ListItem name={name} username={username}>
      {loading ? (
        <Loader />
      ) : requested.includes(username) ? (
        <Button text="Request Pending" type="inline" disabled />
      ) : requests.includes(username) ? (
        <Button action={onAccept} text="Accept Request" type="inline" />
      ) : (
        <Button action={onRequest} text="Connect" type="inline" />
      )}
    </ListItem>
  );
}

const mapStateToProps = ({
  profile: { connections, requested, requests, username },
}) => ({
  connections,
  requested,
  requests,
  myUsername: username,
});
const mapDispatchToProps = (dispatch) => ({
  accept: (username) => dispatch(acceptRequest(username)),
  request: (username) => dispatch(createRequest(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResultListItem);
