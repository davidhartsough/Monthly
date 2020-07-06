import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { colors } from "../theme";

export default function Empty({ text, children }) {
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors[theme].font }]}>{text}</Text>
      <View style={styles.center}>{children}</View>
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
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
