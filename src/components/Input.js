import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function Input({ value, onChange, submit }) {
  return (
    <View style={styles.container}>
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
        importantForAutofill="yes"
        keyboardType="default"
        maxLength="70"
        multiline={false}
        numberOfLines={1}
        onChangeText={onChange}
        onSubmitEditing={submit}
        placeholder="Placeholder"
        placeholderTextColor="#999"
        returnKeyType="done"
        secureTextEntry={false}
        selectTextOnFocus={false}
        spellCheck={false}
        textContentType="name"
        style={styles.input}
        textBreakStrategy
        underlineColorAndroid
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    fontSize: 16,
  },
});
