import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

export default function Loader({ size = "large" }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="#1471eb" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
