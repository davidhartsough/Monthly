import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Touchable from "../../../components/Touchable";
import { colors } from "../../../theme";

export default function RequestsLink({ requestCount }) {
  const navigation = useNavigation();
  const action = () => navigation.navigate("Requests");
  return (
    <View style={styles.container}>
      <Touchable action={action} style={styles.touch}>
        <View style={styles.button}>
          <Feather name="user-plus" size={18} color={colors.dark.font} />
          <Text style={styles.text}>{requestCount}</Text>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
  },
  touch: {
    borderRadius: 6,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    flexDirection: "row",
    backgroundColor: colors.dark.primaryButton,
  },
  text: {
    paddingLeft: 2,
    flex: 0,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.dark.primaryButtonFont,
  },
});
