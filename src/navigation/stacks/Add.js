import React from "react";
import { useColorScheme } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Add } from "../screens";
import options from "../options";
import { currentMonthFormatted } from "../../date-utils";

const StackNav = createStackNavigator();

export default () => {
  const theme = useColorScheme();
  return (
    <StackNav.Navigator initialRouteName="Add" screenOptions={options(theme)}>
      <StackNav.Screen
        name="Add"
        options={{ title: `${currentMonthFormatted} Moments` }}
        component={Add}
      />
    </StackNav.Navigator>
  );
};
