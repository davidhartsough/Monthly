import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Search, Person } from "../screens";
import options from "../options";
import { useColorScheme } from "react-native";

const StackNav = createStackNavigator();

export default () => {
  const theme = useColorScheme();
  return (
    <StackNav.Navigator
      initialRouteName="Search"
      screenOptions={options(theme)}
    >
      <StackNav.Screen name="Search" component={Search} />
      <StackNav.Screen
        name="Person"
        options={({ route }) => ({ title: route.params.name })}
        component={Person}
      />
    </StackNav.Navigator>
  );
};
