import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function Empty({ text, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: colors.dark.font,
  },
});
