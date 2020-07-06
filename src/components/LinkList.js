import React from "react";
import { View, StyleSheet, FlatList, useColorScheme } from "react-native";
import LinkListItem from "./LinkListItem";
import { colors } from "../theme";

export default function LinkList({ items, Empty }) {
  const theme = useColorScheme();
  return (
    <View style={[styles.container, { borderTopColor: colors[theme].border }]}>
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
    borderTopWidth: 1,
  },
  contentContainer: {
    paddingBottom: 16,
  },
  list: {
    flex: 1,
  },
});
