import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { createMoment } from "../../../store/actions/thisMonthsMoments";
import MomentForm from "./MomentForm";
import Loader from "../../../components/Loader";

function NewMomentForm({ saveNewMoment }) {
  const [loading, setLoading] = useState(false);
  function onSave(text) {
    setLoading(true);
    saveNewMoment(text).then(() => {
      setLoading(false);
    });
    return "clear";
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <MomentForm
          initialMoment={{
            id: false,
            text: "",
          }}
          onSave={onSave}
        />
      )}
    </View>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveNewMoment: (text) => dispatch(createMoment(text)),
});
export default connect(null, mapDispatchToProps)(NewMomentForm);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 16,
  },
});
