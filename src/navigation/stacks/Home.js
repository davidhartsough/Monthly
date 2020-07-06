import React from "react";
import { useColorScheme } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Person } from "../screens";
import options from "../options";
import { lastMonthFormatted } from "../../date-utils";

const StackNav = createStackNavigator();

export default () => {
  const theme = useColorScheme();
  return (
    <StackNav.Navigator initialRouteName="Home" screenOptions={options(theme)}>
      <StackNav.Screen
        name="Home"
        options={{ title: `${lastMonthFormatted} Recaps` }}
        component={Home}
      />
      <StackNav.Screen
        name="Person"
        options={({ route }) => ({
          title: route.params.name,
          headerBackTitle: "Home",
        })}
        component={Person}
      />
    </StackNav.Navigator>
  );
};
