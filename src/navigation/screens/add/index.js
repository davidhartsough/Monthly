import React from "react";
import { View, Text } from "react-native";

export default function () {
  return (
    <View>
      <Text>Add</Text>
    </View>
  );
}
/*
import { connect } from "react-redux";
import Add from "./Add";
import { fetchThisMonthsMoments } from "../../../store/actions/thisMonthsMoments";

const mapStateToProps = ({ thisMonthsMoments: { loading, data } }) => ({
  loading,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchThisMonthsMoments()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Add);
*/
