import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Touchable from "./Touchable";
import { colors } from "../theme";

export default function LinkListItem({ username, name }) {
  const theme = useColorScheme();
  const navigation = useNavigation();
  const action = () => navigation.navigate("Profile");
  return (
    <View
      style={[styles.container, { borderBottomColor: colors[theme].border }]}
    >
      <Touchable action={action}>
        <View style={styles.listItem}>
          <Text style={[styles.name, { color: colors[theme].font }]}>
            {name}
          </Text>
          <Text style={[styles.username, { color: colors[theme].subtitle }]}>
            {username}
          </Text>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  listItem: {
    padding: 16,
  },
  name: {
    fontSize: 18,
  },
  username: {
    fontSize: 15,
  },
});
