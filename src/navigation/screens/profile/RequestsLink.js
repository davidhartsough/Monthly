import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Touchable from "../../../components/Touchable";
import { colors } from "../../../theme";

export default function RequestsLink({ requestCount }) {
  const theme = useColorScheme();
  const navigation = useNavigation();
  const action = () => navigation.navigate("Requests");
  return (
    <View style={styles.container}>
      <Touchable action={action} style={styles.touch}>
        <View
          style={[styles.button, { backgroundColor: colors[theme].primary }]}
        >
          <Feather
            name="user-plus"
            size={18}
            color={colors[theme].primaryButtonFont}
          />
          <Text
            style={[styles.text, { color: colors[theme].primaryButtonFont }]}
          >
            {requestCount}
          </Text>
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
    borderRadius: 16,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingLeft: 2,
    flex: 0,
    fontSize: 16,
    fontWeight: "bold",
  },
});
