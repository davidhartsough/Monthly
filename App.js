import React, { useState } from "react";
import { Platform, YellowBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Feather } from "@expo/vector-icons";
import { decode, encode } from "base-64";
import Index from "./src";

// TODO: remove when errors are resolved by package updates
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
// TODO: remove when errors are resolved by package updates (firebase)
if (Platform.OS === "android") {
  console.ignoredYellowBox = ["Setting a timer"];
  YellowBox.ignoreWarnings(["Setting a timer"]);
}

async function loadAssetsAsync() {
  await Font.loadAsync(Feather.font);
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  if (loading) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Index />
    </SafeAreaProvider>
  );
}
