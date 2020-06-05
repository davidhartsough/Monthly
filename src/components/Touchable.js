import React from "react";
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { colors } from "../theme";

export default function Touchable({
  action,
  style = {},
  disabled = false,
  children,
}) {
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback
        onPress={action}
        background={TouchableNativeFeedback.Ripple(rippleColor)}
        style={style}
        disabled={disabled}
      >
        {children}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableHighlight
      activeOpacity={0.85}
      underlayColor={colors.dark.touchableUnderlay}
      onPress={action}
      style={style}
      disabled={disabled}
    >
      {children}
    </TouchableHighlight>
  );
}
