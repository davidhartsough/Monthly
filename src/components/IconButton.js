import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
  useColorScheme,
} from "react-native";
import { colors } from "../theme";

function Touchable({ action, children }) {
  const theme = useColorScheme();
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback
        onPress={action}
        background={TouchableNativeFeedback.Ripple(colors[theme].ripple, false)}
      >
        {children}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableHighlight activeOpacity={0.85} underlayColor="#fff">
      {children}
    </TouchableHighlight>
  );
}

export default function IconButton({ text, action, color }) {
  return (
    <View style={styles.container}>
      <Touchable action={action}>
        <View style={styles.touchable}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  icon: {
    marginRight: 2,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
