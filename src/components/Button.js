import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Touchable from "./Touchable";
import { colors } from "../theme";

export default function Button({ action, text, type = "outline", disabled }) {
  return (
    <View style={type === "inline" ? null : styles.container}>
      <Touchable action={action} disabled={disabled}>
        <View
          style={[
            styles.button,
            styles[`${type}Button`],
            ...(disabled ? [styles.disabledButton] : []),
          ]}
        >
          <Text
            style={[
              styles.text,
              styles[`${type}Text`],
              ...(disabled ? [styles.disabledText] : []),
            ]}
          >
            {text}
          </Text>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  touch: {
    borderRadius: 6,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
  },
  inlineButton: {
    backgroundColor: "transparent",
    borderColor: colors.dark.border,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 8,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: colors.dark.border,
  },
  primaryButton: {
    backgroundColor: colors.dark.primaryButton,
    borderColor: colors.dark.primaryButton,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.2,
  },
  inlineText: {
    color: colors.dark.buttonFont,
  },
  outlineText: {
    color: colors.dark.buttonFont,
  },
  primaryText: {
    color: colors.dark.primaryButtonFont,
  },
  disabledButton: {
    backgroundColor: colors.dark.disabledButton,
    borderColor: colors.dark.disabledButtonBorder,
  },
  disabledText: {
    color: colors.dark.disabledButtonFont,
  },
});
