import React from "react";
import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Home, Search, Add, Profile } from "./stacks";
import { colors } from "../theme";

const TabBarIcon = ({ name, focused }) => (
  <Feather name={name} size={30} color={focused ? "#1471eb" : "#ccc"} />
);

const BottomTab = createBottomTabNavigator();
const tabBarOptions = (theme) => ({
  activeTintColor: colors[theme].navLinkActive,
  inactiveTintColor: colors[theme].navLink,
  showLabel: false,
  style: {
    backgroundColor: colors[theme].nav,
    borderColor: colors[theme].border,
  },
  keyboardHidesTabBar: true,
});

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={tabBarOptions(colorScheme)}
      resetOnBlur={true}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
          unmountOnBlur: true,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="search" />
          ),
          unmountOnBlur: true,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="plus-circle" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user" />
          ),
          unmountOnBlur: true,
        }}
      />
    </BottomTab.Navigator>
  );
}
