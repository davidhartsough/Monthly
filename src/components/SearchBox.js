import React from "react";
import { View, StyleSheet, TextInput, useColorScheme } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme";

export default function SearchBox({ setValue, onSubmit, value }) {
  const theme = useColorScheme();
  return (
    <View style={[styles.container, { borderColor: colors[theme].border }]}>
      <Feather name="search" size={18} color={colors[theme].placeholderText} />
      <TextInput
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        blurOnSubmit={true}
        caretHidden={false}
        clearButtonMode="while-editing"
        clearTextOnFocus={false}
        contextMenuHidden={false}
        enablesReturnKeyAutomatically={true}
        importantForAutofill="no"
        maxLength={70}
        onChangeText={setValue}
        onSubmitEditing={onSubmit}
        placeholder="Search"
        placeholderTextColor={colors[theme].placeholderText}
        returnKeyType="search"
        textContentType="name"
        style={[styles.input, { color: colors[theme].font }]}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    margin: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    flex: 1,
    marginLeft: 4,
  },
});
