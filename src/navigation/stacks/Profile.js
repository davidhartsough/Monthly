import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile, Requests } from "../screens";
import options from "../options";

const StackNav = createStackNavigator();

export default () => (
  <StackNav.Navigator initialRouteName="Profile" screenOptions={options}>
    <StackNav.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
    <StackNav.Screen name="Requests" component={Requests} />
  </StackNav.Navigator>
);
