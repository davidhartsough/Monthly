import React, { useEffect } from "react";
import { connect } from "react-redux";
import Person from "./Person";
import Loader from "../../../components/Loader";

function Redirect({ navigate }) {
  useEffect(() => {
    navigate("Profile");
  }, [navigate]);
  return <Loader />;
}

function UsernameCheck({ route, navigation, profile }) {
  const { name, username } = route.params;
  if (username === profile.username) {
    return <Redirect navigate={navigation.navigate} />;
  }
  return <Person name={name} username={username} profile={profile} />;
}

export default connect(({ profile }) => ({ profile }))(UsernameCheck);
