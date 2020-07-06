import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { acceptRequest, ignoreRequest } from "../../../store/actions/general";
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
        <ActivityIndicator color="#1471eb" size="small" />
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
