import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import Touchable from "./Touchable";
import { colors } from "../theme";

export default function Button({ action, text, type = "outline", disabled }) {
  const theme = useColorScheme();
  const themedStyles = getThemedStyles(theme);
  return (
    <View style={type === "inline" ? null : styles.container}>
      <Touchable action={action} disabled={disabled}>
        <View
          style={[
            styles.button,
            styles[`${type}Button`],
            themedStyles[`${type}Button`],
            ...(disabled ? [themedStyles.disabledButton] : []),
          ]}
        >
          <Text
            style={[
              styles.text,
              themedStyles[`${type}Text`],
              ...(disabled ? [themedStyles.disabledText] : []),
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
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
  },
  inlineButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 8,
  },
  outlineButton: {
    backgroundColor: "transparent",
  },
  primaryButton: {},
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.2,
  },
});

const getThemedStyles = (theme) => ({
  inlineButton: {
    borderColor: colors[theme].border,
  },
  outlineButton: {
    borderColor: colors[theme].border,
  },
  primaryButton: {
    backgroundColor: colors[theme].primary,
    borderColor: colors[theme].primary,
  },
  inlineText: {
    color: colors[theme].buttonFont,
  },
  outlineText: {
    color: colors[theme].buttonFont,
  },
  primaryText: {
    color: colors[theme].primaryButtonFont,
  },
  disabledButton: {
    backgroundColor: colors[theme].disabledButton,
    borderColor: colors[theme].disabledButtonBorder,
  },
  disabledText: {
    color: colors[theme].disabledButtonFont,
  },
});
