import React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { colors } from "../theme";

export default function Page({ children }) {
  const theme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors[theme].background,
          color: colors[theme].font,
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
