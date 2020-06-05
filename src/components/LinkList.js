import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import LinkListItem from "./LinkListItem";
import { colors } from "../theme";

export default function LinkList({ items, Empty }) {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => (
          <LinkListItem username={item.username} name={item.name} />
        )}
        data={items}
        ListEmptyComponent={Empty}
        keyExtractor={({ username }) => username}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        extraData={items}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor: colors.dark.border,
    borderTopWidth: 1,
  },
  contentContainer: {
    paddingBottom: 16,
  },
  list: {
    flex: 1,
  },
});
