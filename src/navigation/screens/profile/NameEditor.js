import React, { useState } from "react";
import { connect } from "react-redux";
import { changeName } from "../../../store/actions/profile";
import {
  Modal,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { colors } from "../../../theme";
import Button from "../../../components/Button";

function NameEditor({ show, close, profile, save }) {
  const [name, setName] = useState(profile.name);
  function submit() {
    const submission = name.trim();
    if (submission.length > 1) {
      if (submission !== profile.name) save(submission);
      close();
    }
  }
  const doNothing = () => {};
  return (
    <Modal
      visible={show}
      onRequestClose={close}
      style={styles.modal}
      transparent={true}
      onDismiss={close}
    >
      <TouchableWithoutFeedback style={styles.backdrop} onPress={close}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={doNothing}>
            <View style={styles.form}>
              <Text style={styles.text}>Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  autoCompleteType="name"
                  autoFocus={true}
                  blurOnSubmit={true}
                  enablesReturnKeyAutomatically={true}
                  importantForAutofill="yes"
                  maxLength={70}
                  numberOfLines={1}
                  onChangeText={setName}
                  onSubmitEditing={submit}
                  placeholder={profile.name}
                  placeholderTextColor={colors.dark.placeholderText}
                  returnKeyType="done"
                  textContentType="name"
                  style={styles.input}
                  value={name}
                />
              </View>
              <View style={styles.button}>
                <Button
                  action={submit}
                  disabled={name.length < 2}
                  text="Save"
                  type="primary"
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const mapStateToProps = ({ profile }) => ({ profile });
const mapDispatchToProps = (dispatch) => ({
  save: (name) => dispatch(changeName(name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NameEditor);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#00000099",
    justifyContent: "center",
  },
  backdrop: {
    flex: 1,
  },
  form: {
    backgroundColor: colors.dark.background,
    borderColor: colors.dark.border,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    margin: 24,
    padding: 16,
    flex: 0,
  },
  text: {
    fontSize: 16,
    color: colors.dark.font,
    fontWeight: "bold",
  },
  inputContainer: {
    borderColor: colors.dark.border,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
  },
  input: {
    fontSize: 16,
    color: colors.dark.font,
  },
  button: {
    alignSelf: "flex-end",
  },
});
