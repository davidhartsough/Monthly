import React, { useState } from "react";
import { View, FlatList, StyleSheet, useColorScheme } from "react-native";
import Loader from "../../../components/Loader";
import Empty from "../../../components/Empty";
import SearchBox from "../../../components/SearchBox";
import ResultListItem from "./ResultListItem";
import { colors } from "../../../theme";

export default function Search({ loading, query = "", data, submit }) {
  const theme = useColorScheme();
  const [input, setInput] = useState(query.toLowerCase());
  function onSubmit() {
    if (loading) return;
    const search = input.trim().toUpperCase();
    if (search.length > 1 && search !== query) {
      submit(search);
    }
  }
  return (
    <>
      <SearchBox value={input} onSubmit={onSubmit} setValue={setInput} />
      {loading ? (
        <Loader />
      ) : query.length > 0 ? (
        <View
          style={[
            styles.listContainer,
            { borderTopColor: colors[theme].border },
          ]}
        >
          <FlatList
            renderItem={({ item }) => (
              <ResultListItem name={item.name} username={item.username} />
            )}
            data={data}
            ListEmptyComponent={
              <Empty text="No people found for that search" />
            }
            keyExtractor={({ username }) => username}
            style={styles.list}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
      ) : (
        <Empty text="Find your friends" />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
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
