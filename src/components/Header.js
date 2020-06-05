import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function Header({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    color: colors.dark.font,
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 18,
    color: colors.dark.subtitle,
    fontWeight: "bold",
    marginVertical: 4,
  },
});
