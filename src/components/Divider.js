import React from "react";
import { View, useColorScheme } from "react-native";
import { colors } from "../theme";

export default function Divider() {
  const theme = useColorScheme();
  return (
    <View style={{ height: 1, backgroundColor: colors[theme].border }}></View>
  );
}
