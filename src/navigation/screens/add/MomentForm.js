import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  useColorScheme,
  Platform,
} from "react-native";
import Button from "../../../components/Button";
import { colors } from "../../../theme";

export default function MomentForm({ initialMoment, onSave, onDelete }) {
  const theme = useColorScheme();
  const [text, setText] = useState(initialMoment.text);
  function submit() {
    const response = onSave(text.trim());
    if (response === "clear") setText("");
  }
  return (
    <View>
      <View
        style={[styles.inputContainer, { borderColor: colors[theme].border }]}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          maxLength={480}
          multiline={true}
          placeholder="Share a moment from this month"
          placeholderTextColor={colors[theme].placeholderText}
          style={{
            color: colors[theme].font,
            fontSize: 16,
            paddingBottom: Platform.OS === "ios" ? 4 : 0,
          }}
        />
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
  text: {
    fontSize: 16,
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  inputContainer: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 4,
  },
});
