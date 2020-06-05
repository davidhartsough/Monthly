import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function FormText({ type = "info", text }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles[type]]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
  },
  text: {
    fontSize: 15,
  },
  info: {
    color: colors.dark.subtitle,
  },
  error: {
    color: colors.dark.error,
  },
  valid: {
    color: colors.dark.valid,
  },
});
