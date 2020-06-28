import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Month from "../../../components/month";
import RequestsLink from "./RequestsLink";
import MoreMenu from "./MoreMenu";
import { colors } from "../../../theme";

export default function Profile({ profile }) {
  const { username, name, uid, requests, ignored } = profile;
  const count = requests.filter((i) => !ignored.includes(i)).length;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{username}</Text>
        </View>
        <View style={styles.actions}>
          {count > 0 && <RequestsLink requestCount={count} />}
          <MoreMenu />
        </View>
      </View>
      <Month uid={uid} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0,
    flexDirection: "row",
    padding: 16,
    paddingBottom: 8,
  },
  headerText: {
    flex: 1,
  },
  title: {
    color: colors.dark.font,
    fontSize: 20,
  },
  subtitle: {
    color: colors.dark.subtitle,
    fontSize: 16,
    fontWeight: "bold",
  },
  actions: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
