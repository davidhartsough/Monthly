import React from "react";
import { useColorScheme } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile, Requests } from "../screens";
import options from "../options";

const StackNav = createStackNavigator();

export default () => {
  const theme = useColorScheme();
  return (
    <StackNav.Navigator
      initialRouteName="Profile"
      screenOptions={options(theme)}
    >
      <StackNav.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <StackNav.Screen name="Requests" component={Requests} />
    </StackNav.Navigator>
  );
};
