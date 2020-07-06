import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Touchable from "./Touchable";
import { colors } from "../theme";

export default function Link({ to, text }) {
  const theme = useColorScheme();
  const navigation = useNavigation();
  const action = () => navigation.navigate(to);
  return (
    <View style={styles.container}>
      <Touchable action={action}>
        <Text style={[styles.text, { color: colors[theme].link }]}>{text}</Text>
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
  },
});
