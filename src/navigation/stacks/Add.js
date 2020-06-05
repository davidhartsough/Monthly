import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Add } from "../screens";
import options from "../options";
import { currentMonthFormatted } from "../../date-utils";

const StackNav = createStackNavigator();

export default () => (
  <StackNav.Navigator initialRouteName="Add" screenOptions={options}>
    <StackNav.Screen
      name="Add"
      options={{ title: `${currentMonthFormatted} Moments` }}
      component={Add}
    />
  </StackNav.Navigator>
);
