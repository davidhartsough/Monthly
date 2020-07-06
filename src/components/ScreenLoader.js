import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import Loader from "./Loader";
import { colors } from "../theme";

export default function ScreenLoader() {
  const theme = useColorScheme();
  return (
    <View
      style={[styles.container, { backgroundColor: colors[theme].background }]}
    >
      <Text style={[styles.title, { color: colors[theme].font }]}>
        Monthly Moments
      </Text>
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
    textAlign: "center",
    marginBottom: 8,
  },
});
