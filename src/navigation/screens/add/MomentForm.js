import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../../components/Button";

export default function MomentForm({ initialMoment, onSave, onDelete }) {
  const [text, setText] = useState(initialMoment.text);
  function submit() {
    const response = onSave(text.trim());
    if (response === "clear") setText("");
  }
  // TODO TextInput maxLength="480" minLength="2"
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Share a moment from this month</Text>
      </View>
      <View style={styles.actions}>
        {initialMoment.id && text.trim().length === 0 ? (
          <Button action={onDelete} text="Delete" />
        ) : (
          <Button
            action={submit}
            text={initialMoment.id ? "Save" : "Add"}
            type="primary"
            disabled={text.trim().length < 3 || text.length > 480}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 16,
  },
  text: {
    fontSize: 16,
  },
});
