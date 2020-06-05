import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Search, Person } from "../screens";
import options from "../options";

const StackNav = createStackNavigator();

export default () => (
  <StackNav.Navigator initialRouteName="Search" screenOptions={options}>
    <StackNav.Screen name="Search" component={Search} />
    <StackNav.Screen
      name="Person"
      options={({ route }) => ({ title: route.params.name })}
      component={Person}
    />
  </StackNav.Navigator>
);
