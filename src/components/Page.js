import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function Page({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.dark.background,
    color: colors.dark.font,
  },
});
