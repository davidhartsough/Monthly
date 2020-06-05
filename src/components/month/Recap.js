import React, { useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { fetchRecap } from "../../store/actions/recap";
import Loader from "../Loader";
import Empty from "../Empty";
import MomentList from "./MomentList";

function Recap({ month, uid, recap, getRecap }) {
  useEffect(() => {
    getRecap(month, uid);
  }, [getRecap, month, uid]);
  if (recap.loading) return <Loader />;
  return (
    <MomentList
      moments={recap.moments}
      Empty={<Empty text="No moments for this month." />}
    />
  );
}

const mapStateToProps = ({ recap }) => ({ recap });
const mapDispatchToProps = (dispatch) => ({
  getRecap: (month, uid) => dispatch(fetchRecap(month, uid)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Recap);
