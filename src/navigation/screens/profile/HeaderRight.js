import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
// import { signOut } from "../../../store/actions/auth";

function HeaderRight({ requests, ignored }) {
  const requestCount = requests.filter((i) => !ignored.includes(i)).length;
  return (
    <View style={styles.container}>
      {requestCount > 0 && <RequestsLink requestCount={requestCount} />}
      <MoreMenu />
    </View>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   logOut: () => dispatch(signOut()),
// });
export default connect(({ profile: { requests, ignored } }) => ({
  requests,
  ignored,
}))(HeaderRight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
