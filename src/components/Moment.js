import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import MomentLink from "./MomentLink";
import { colors } from "../theme";

const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
const hasALink = (str) => str.includes("https://") || str.includes("http://");
const whitespacePattern = /\s/;

function formatText(str) {
  let text = [];
  let remaining = str;
  while (hasALink(remaining)) {
    let nextIndex = remaining.indexOf("https://");
    const altUrlIndex = remaining.indexOf("http://");
    if (altUrlIndex !== -1 && (nextIndex > altUrlIndex || nextIndex === -1)) {
      nextIndex = altUrlIndex;
    }
    text.push(remaining.slice(0, nextIndex));
    remaining = remaining.slice(nextIndex);
    const nextSpaceIndex = remaining.search(whitespacePattern);
    if (nextSpaceIndex === -1) {
      if (!urlPattern.test(remaining)) {
        text.push(remaining);
      } else {
        text.push(
          <MomentLink key={`${remaining}-${nextSpaceIndex}`} url={remaining} />
        );
      }
      remaining = "";
      break;
    } else {
      const newUrl = remaining.slice(0, nextSpaceIndex);
      if (!urlPattern.test(newUrl)) {
        text.push(newUrl);
      } else {
        text.push(
          <MomentLink key={`${newUrl}-${nextSpaceIndex}`} url={newUrl} />
        );
      }
      remaining = remaining.slice(nextSpaceIndex);
    }
  }
  if (remaining.length > 0) text.push(remaining);
  return text;
}

export default function Moment({ moment, paddingRight = 16 }) {
  const theme = useColorScheme();
  const { text } = moment;
  return (
    <View
      style={[
        styles.container,
        { borderColor: colors[theme].border, paddingRight },
      ]}
    >
      <Text style={{ fontSize: 16, color: colors[theme].font }}>
        {hasALink(text) ? formatText(text) : text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 16,
  },
});
