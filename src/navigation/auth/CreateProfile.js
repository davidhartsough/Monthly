import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { createProfile } from "../../store/actions/auth";
import { getPerson } from "../../store/db/fb";
import Button from "../../components/Button";
import { colors } from "../../theme";

function ThemedText({ style, children }) {
  const theme = useColorScheme();
  return <Text style={[style, { color: colors[theme].font }]}>{children}</Text>;
}

const usernamePattern = /^[a-z]{1,50}$/;

function CreateProfile({ displayName, suggestion, makeProfile }) {
  const theme = useColorScheme();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(displayName || "");
  const [username, setUsername] = useState(suggestion || "");
  const [error, setError] = useState(false);
  function onSubmit() {
    if (loading) return;
    setLoading(true);
    const _name = name.trim();
    const _username = username.trim().toLowerCase();
    getPerson(_username)
      .then(() => {
        setError(_username);
        setLoading(false);
      })
      .catch(() => {
        setError(false);
        makeProfile(_name, _username);
      });
  }
  const nlen = name.length;
  const ulen = username.length;
  const nameIsValid = nlen >= 3 && nlen <= 70;
  const passPattern = usernamePattern.test(username);
  const usernameIsValid = ulen >= 3 && ulen <= 50 && passPattern;
  const inputStyles = [
    styles.input,
    { borderColor: colors[theme].border, color: colors[theme].font },
  ];
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[theme].background }]}
    >
      <View style={styles.header}>
        <ThemedText style={styles.heading}>Monthly Moments</ThemedText>
        <ThemedText style={styles.subheading}>Create a profile</ThemedText>
      </View>
      <View style={styles.create}>
        <View style={styles.label}>
          <ThemedText style={styles.text}>Name</ThemedText>
          <Text
            style={[
              styles.helper,
              {
                color: nameIsValid ? colors[theme].valid : colors[theme].font,
              },
            ]}
          >{`${nlen}/70`}</Text>
        </View>
        <TextInput
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          autoCompleteType="name"
          style={inputStyles}
          placeholder={displayName || "Name"}
          placeholderTextColor={colors[theme].placeholderText}
          returnKeyType="next"
          spellCheck={false}
          textContentType="name"
          maxLength={70}
        />
        <View style={styles.label}>
          <ThemedText style={styles.text}>Username</ThemedText>
          <Text
            style={[
              styles.helper,
              {
                color: usernameIsValid
                  ? colors[theme].valid
                  : colors[theme].font,
              },
            ]}
          >{`${ulen}/50`}</Text>
        </View>
        <TextInput
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={inputStyles}
          placeholder={suggestion || "username"}
          placeholderTextColor={colors[theme].placeholderText}
          returnKeyType="done"
          spellCheck={false}
          textContentType="username"
          maxLength={50}
          onSubmitEditing={onSubmit}
          enablesReturnKeyAutomatically
        />
        {ulen > 0 && !passPattern && (
          <Text style={[styles.helper, { color: colors[theme].error }]}>
            Please only use lowercase letters.
          </Text>
        )}
        {!!error && (
          <Text style={[styles.helper, { color: colors[theme].error }]}>
            Sorry, the username "{error}" is taken.
          </Text>
        )}
        <ThemedText style={styles.helper}>
          Please note that you cannot change your username after this.
        </ThemedText>
        <View>
          {loading ? (
            <View style={styles.spaced}>
              <ActivityIndicator size="small" color="#1471eb" />
            </View>
          ) : (
            <Button
              action={onSubmit}
              text="Create"
              type="primary"
              disabled={!nameIsValid || !usernameIsValid}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapDispatchToProps = (dispatch) => ({
  makeProfile: (name, username) => dispatch(createProfile(name, username)),
});
export default connect(null, mapDispatchToProps)(CreateProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {},
  heading: {
    fontSize: 24,
  },
  subheading: {
    fontSize: 20,
  },
  create: {
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  helper: {
    fontSize: 12,
  },
  input: {
    marginTop: 2,
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: 16,
  },
  spaced: {
    marginVertical: 12,
  },
});
