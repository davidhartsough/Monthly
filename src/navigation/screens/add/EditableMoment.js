import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  updateMoment,
  deleteMoment,
} from "../../../store/actions/thisMonthsMoments";
import MomentForm from "./MomentForm";
import Moment from "../../../components/Moment";
import Loader from "../../../components/Loader";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../theme";

function EditButton({ action }) {
  return (
    <View>
      <Touchable action={action} style={styles.touch} disabled={disabled}>
        <View style={styles.button}>
          <Feather name="edit" size={16} color={colors.dark.font} />
        </View>
      </Touchable>
    </View>
  );
}

function EditableMoment({ moment, saveChanges, removeMoment }) {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const toggle = () => setEditing(!editing);
  function onSave(text) {
    if (text === moment.text) return toggle();
    setLoading(true);
    saveChanges(moment.id, text).then(() => {
      toggle();
      setLoading(false);
    });
  }
  function handleDelete() {
    removeMoment(moment.id);
    setDeleted(true);
  }
  if (deleted) return null;
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : editing ? (
        <MomentForm
          initialMoment={moment}
          onSave={onSave}
          onDelete={handleDelete}
        />
      ) : (
        <View style={styles.editable}>
          <Moment moment={moment} />
          <EditButton />
        </View>
      )}
    </View>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveChanges: (id, text) => dispatch(updateMoment(id, text)),
  removeMoment: (id) => dispatch(deleteMoment(id)),
});
export default connect(null, mapDispatchToProps)(EditableMoment);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
  },
});
