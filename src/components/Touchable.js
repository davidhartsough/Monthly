import React from "react";
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  useColorScheme,
} from "react-native";
import { colors } from "../theme";

export default function Touchable({
  action,
  style = {},
  disabled = false,
  children,
}) {
  const theme = useColorScheme();
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback
        onPress={action}
        background={TouchableNativeFeedback.Ripple(colors[theme].ripple, false)}
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
      underlayColor={colors[theme].touchableUnderlay}
      onPress={action}
      style={style}
      disabled={disabled}
    >
      {children}
    </TouchableHighlight>
  );
}
