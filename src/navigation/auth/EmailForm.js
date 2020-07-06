import React, { useState } from "react";
import { StyleSheet, TextInput, View, useColorScheme } from "react-native";
import Button from "../../components/Button";
import FormText from "../../components/FormText";
import { createUser, emailSignIn } from "../../store/db/auth";
import { colors } from "../../theme";

export default function EmailForm({ type }) {
  const theme = useColorScheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  function submit() {
    if (loading || email.length < 5 || password.length < 6) {
      return;
    }
    setLoading(true);
    const action = type === "In" ? emailSignIn : createUser;
    action(email, password).catch(({ code, message }) => {
      switch (code) {
        case "auth/invalid-email":
          setEmailError("Please enter a valid email.");
          setPasswordError(false);
          break;
        case "auth/email-already-in-use":
          setEmailError("There is already an account with this email.");
          setPasswordError(false);
          break;
        case "auth/user-not-found":
          setEmailError("There is no account with this email.");
          setPasswordError(false);
          break;
        case "auth/weak-password":
          setPasswordError(message);
          setEmailError(false);
          break;
        case "auth/wrong-password":
          setPasswordError(
            "Incorrect password, or this account uses a social login."
          );
          setEmailError(false);
          break;
        default:
          setPasswordError("An error occurred. Please check your information.");
          setEmailError(false);
          break;
      }
      setLoading(false);
    });
  }
  const inputStyles = [
    styles.input,
    { borderColor: colors[theme].border, color: colors[theme].font },
  ];
  return (
    <View
      style={[styles.container, { backgroundColor: colors[theme].background }]}
    >
      <View style={styles.pad}>
        <TextInput
          autoFocus
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCompleteType="email"
          style={inputStyles}
          importantForAutofill="yes"
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={colors[theme].placeholderText}
          returnKeyType="next"
          spellCheck={false}
          textContentType="emailAddress"
        />
        {!!emailError && <FormText type="error" text={emailError} />}
        <TextInput
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCompleteType={type === "In" ? "password" : "off"}
          autoCorrect={false}
          style={inputStyles}
          placeholder="Password"
          placeholderTextColor={colors[theme].placeholderText}
          returnKeyType="done"
          secureTextEntry={true}
          spellCheck={false}
          textContentType="password"
          onSubmitEditing={submit}
        />
        {!!passwordError && <FormText type="error" text={passwordError} />}
        <View style={styles.formActions}>
          <Button
            action={submit}
            text={`Sign ${type}`}
            type="primary"
            disabled={loading || email.length < 5 || password.length < 6}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pad: {
    padding: 16,
  },
  input: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: 16,
  },
  formActions: {
    marginBottom: 48,
  },
});
