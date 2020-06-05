import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Loader from "./Loader";
import { colors } from "../theme";

export default function ScreenLoader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Moments</Text>
      <Loader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    padding: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: colors.dark.font,
    textAlign: "center",
    marginBottom: 8,
  },
});
