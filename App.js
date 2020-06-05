import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { decode, encode } from "base-64";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Feather } from "@expo/vector-icons";
import Index from "./src";
import { colors } from "./src/theme";

// TODO: remove when errors are resolved by package updates
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
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
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
    color: colors.dark.font,
    fontSize: 16,
  },
});
