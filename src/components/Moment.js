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
    let urlIndex = remaining.indexOf("https://");
    let altUrlIndex = remaining.indexOf("http://");
    if (altUrlIndex !== -1 && (urlIndex > altUrlIndex || urlIndex === -1)) {
      urlIndex = altUrlIndex;
    }
    let url = remaining.slice(urlIndex);
    let nextSpaceIndex = url.search(whitespacePattern);
    if (nextSpaceIndex === -1) {
      nextSpaceIndex = remaining.length - 1;
      if (!urlPattern.test(url)) {
        text.push(remaining);
        remaining = "";
        break;
      }
      text.push(remaining.slice(0, urlIndex));
      text.push(
        <MomentLink key={`${url}-${urlIndex}-${nextSpaceIndex}`} url={url} />
      );
      remaining = "";
      break;
    } else {
      url = url.slice(0, nextSpaceIndex);
      nextSpaceIndex += urlIndex;
    }
    if (!urlPattern.test(url)) {
      text.push(remaining.slice(0, nextSpaceIndex));
      remaining = remaining.slice(nextSpaceIndex);
      continue;
    }
    text.push(remaining.slice(0, urlIndex));
    text.push(
      <MomentLink key={`${url}-${urlIndex}-${nextSpaceIndex}`} url={url} />
    );
    remaining = remaining.slice(nextSpaceIndex);
  }
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
