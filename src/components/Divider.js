import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function Divider() {
  return <View style={styles.divider}></View>;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.dark.border,
  },
});
