import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

//username={username} name={name}

export default function ResultList({ results, Empty }) {
  return (
    <View style={styles.list}>
      <FlatList
        renderItem={({ item }) => <ResultListItem result={item} />}
        data={results}
        ListEmptyComponent={Empty}
        keyExtractor={({ username }) => username}
      />
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
