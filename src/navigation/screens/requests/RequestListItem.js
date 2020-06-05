import React, { useState } from "react";
import { connect } from "react-redux";
import { acceptRequest, ignoreRequest } from "../../../store/actions/general";
import Loader from "../../../components/Loader";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";

function RequestListItem({ name, username, accept, ignore }) {
  const [loading, setLoading] = useState(false);
  function onAccept() {
    setLoading(true);
    accept(username);
  }
  function onIgnore() {
    setLoading(true);
    ignore(username);
  }
  return (
    <ListItem name={name} username={username}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Button action={onAccept} text="Accept" type="inline" />
          <Button action={onIgnore} text="Ignore" type="inline" />
        </>
      )}
    </ListItem>
  );
}

const mapDispatchToProps = (dispatch) => ({
  accept: (username) => dispatch(acceptRequest(username)),
  ignore: (username) => dispatch(ignoreRequest(username)),
});
export default connect(null, mapDispatchToProps)(RequestListItem);
