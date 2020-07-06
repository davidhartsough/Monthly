import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { colors } from "../theme";

export default function FormText({ type = "info", text }) {
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, color: colors[theme][type] }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
  },
});
