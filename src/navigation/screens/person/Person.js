import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { fetchPerson } from "../../../store/actions/person";
import { acceptRequest, createRequest } from "../../../store/actions/general";
import Month from "../../../components/month";
import Loader from "../../../components/Loader";
import Button from "../../../components/Button";

function Person({
  name,
  username,
  person,
  profile,
  getPerson,
  accept,
  request,
}) {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    getPerson(username);
    navigation.setOptions({ title: name });
    setLoading(false);
  }, [getPerson, username, name]);
  if (person.loading) return <Loader />;
  function onAccept() {
    setLoading(true);
    accept(username).then(() => setLoading(false));
  }
  function onRequest() {
    setLoading(true);
    request(username).then(() => setLoading(false));
  }
  return (
    <View style={styles.container}>
      {profile.connections.includes(username) ? (
        <Month uid={person.uid} />
      ) : (
        <View style={styles.central}>
          {loading ? (
            <Loader />
          ) : profile.requested.includes(username) ? (
            <Button disabled text="Request Pending" />
          ) : profile.requests.includes(username) ? (
            <Button action={onAccept} text="Accept Request" />
          ) : (
            <Button action={onRequest} text="Connect" />
          )}
        </View>
      )}
    </View>
  );
}

const mapStateToProps = ({ person }) => ({ person });
const mapDispatchToProps = (dispatch) => ({
  getPerson: (username) => dispatch(fetchPerson(username)),
  accept: (username) => dispatch(acceptRequest(username)),
  request: (username) => dispatch(createRequest(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Person);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  central: {
    flex: 1,
    padding: 16,
  },
});
