import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Fetcher from "../../../components/Fetcher";
import Empty from "../../../components/Empty";
import RequestListItem from "./RequestListItem";

export default function Requests({ data, loading, fetchData }) {
  return (
    <Fetcher fetchData={fetchData} loading={loading}>
      <View style={styles.container}>
        <FlatList
          renderItem={({ item }) => (
            <RequestListItem username={item.username} name={item.name} />
          )}
          data={data}
          ListEmptyComponent={<Empty text="No more requests" />}
          keyExtractor={({ username }) => username}
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </Fetcher>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 16,
    paddingTop: 4,
  },
  list: {
    flex: 1,
  },
});
