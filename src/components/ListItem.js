import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { colors } from "../theme";

export default function ListItem({ name, username, children }) {
  const theme = useColorScheme();
  return (
    <View
      style={[styles.container, { borderBottomColor: colors[theme].border }]}
    >
      <View style={styles.itemText}>
        <Text style={[styles.name, { color: colors[theme].font }]}>{name}</Text>
        <Text style={[styles.username, { color: colors[theme].subtitle }]}>
          {username}
        </Text>
      </View>
      {children && <View style={styles.itemActions}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 16,
  },
  username: {
    fontSize: 14,
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
