import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function ListItem({ name, username, children }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      {children && <View style={styles.itemActions}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    borderBottomColor: colors.dark.border,
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 16,
    color: colors.dark.font,
  },
  username: {
    fontSize: 14,
    color: colors.dark.subtitle,
    fontWeight: "bold",
  },
  itemText: {
    flex: 1,
  },
  itemActions: {
    flex: 0,
    flexDirection: "row",
  },
});
