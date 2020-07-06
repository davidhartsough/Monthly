import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { colors } from "../theme";

export default function Header({ title, subtitle }) {
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors[theme].font }]}>{title}</Text>
      <Text style={[styles.subtitle, { color: colors[theme].subtitle }]}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
  },
});
