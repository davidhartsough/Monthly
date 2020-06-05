import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function List() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List</Text>
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
  },
});
