import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme";

export default function SearchBox({ setValue, onSubmit, value }) {
  return (
    <View style={styles.container}>
      <Feather name="search" size={18} color={colors.dark.placeholderText} />
      <TextInput
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        autoFocus={true}
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
        placeholderTextColor={colors.dark.placeholderText}
        returnKeyType="search"
        textContentType="name"
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderColor: colors.dark.border,
    borderWidth: 1,
    borderRadius: 4,
    margin: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    color: colors.dark.font,
    flex: 1,
    marginLeft: 4,
  },
});
