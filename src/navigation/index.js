import React from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import BottomTabs from "./BottomTabs";

export default () => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <BottomTabs />
    </NavigationContainer>
  );
};
