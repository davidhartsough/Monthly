import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Moment from "../Moment";
import { colors } from "../../theme";

export default function MomentList({ moments, Empty }) {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => <Moment moment={item} />}
        data={moments}
        ListEmptyComponent={Empty}
        keyExtractor={({ id }) => id}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor: colors.dark.fadedBorder,
    borderTopWidth: 1,
  },
  contentContainer: {
    paddingBottom: 48,
    paddingTop: 4,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
