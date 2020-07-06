import React, { useState } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import {
  updateMoment,
  deleteMoment,
} from "../../../store/actions/thisMonthsMoments";
import Moment from "../../../components/Moment";
import Touchable from "../../../components/Touchable";
import Loader from "../../../components/Loader";
import { colors } from "../../../theme";
import MomentForm from "./MomentForm";

function EditButton({ action, disabled }) {
  const theme = useColorScheme();
  return (
    <View style={styles.editToggle}>
      <Touchable action={action} style={styles.touch} disabled={disabled}>
        <View>
          <Feather name="edit" size={16} color={colors[theme].font} />
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
          <Moment moment={moment} paddingRight={24} />
          <EditButton action={toggle} disabled={loading} />
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
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
  },
  editable: {
    position: "relative",
  },
  editToggle: {
    position: "absolute",
    top: 4,
    right: 3,
    height: 24,
    width: 24,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
