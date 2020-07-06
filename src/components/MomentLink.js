import React from "react";
import { Text, useColorScheme } from "react-native";
import * as Linking from "expo-linking";
import { colors } from "../theme";

const urlPrefixes = ["https://", "http://", "www.", "www2."];
function formatLink(url) {
  let link = url;
  urlPrefixes.forEach((prefix) => {
    if (link.startsWith(prefix)) {
      link = link.replace(prefix, "");
    }
  });
  if (link.charAt(link.length - 1) === "/") {
    link = link.slice(0, -1);
  }
  if (link.length > 40) {
    link = link.substr(0, 40) + "…";
  }
  return link;
}

export default function MomentLink({ url }) {
  const theme = useColorScheme();
  const action = () => Linking.openURL(url);
  return (
    <Text
      style={{
        fontSize: 16,
        color: colors[theme].link,
      }}
      onPress={action}
    >{` ${formatLink(url)} `}</Text>
  );
}
