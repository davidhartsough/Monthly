import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Touchable from "./Touchable";
import { colors } from "../theme";

export default function LinkListItem({ username, name }) {
  const navigation = useNavigation();
  const action = () => navigation.navigate("Profile");
  return (
    <View style={styles.container}>
      <Touchable action={action}>
        <View style={styles.listItem}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.dark.border,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  listItem: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    color: colors.dark.font,
  },
  username: {
    fontSize: 15,
    color: colors.dark.subtitle,
  },
});
