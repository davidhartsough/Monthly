import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Touchable from "./Touchable";
import { colors } from "../theme";

export default function Link({ to, text }) {
  const navigation = useNavigation();
  const action = () => navigation.navigate(to);
  return (
    <View style={styles.container}>
      <Touchable action={action}>
        <Text style={styles.text}>{text}</Text>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 16,
    fontSize: 16,
    color: colors.dark.link,
  },
});
