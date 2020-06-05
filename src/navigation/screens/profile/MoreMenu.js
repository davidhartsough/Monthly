import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import Touchable from "../../../components/Touchable";
import { colors } from "../../../theme";
import ModalMenu from "./ModalMenu";
import NameEditor from "./NameEditor";

const icon = Platform.OS === "ios" ? "horizontal" : "vertical";
const backgroundColor =
  Platform.OS === "ios" ? colors.dark.touchableUnderlay : "transparent";

// TODO: menu options

export default function MoreMenu() {
  const [show, setShow] = useState(false);
  const [editorVisible, setEditorVisible] = useState(false);
  function openEditor() {
    close();
    setEditorVisible(true);
  }
  const open = () => setShow(true);
  const close = () => setShow(false);
  const closeEditor = () => setEditorVisible(false);
  return (
    <View style={styles.container}>
      <NameEditor close={closeEditor} show={editorVisible} />
      <ModalMenu
        close={close}
        show={show}
        options={[
          { label: "Edit name", action: openEditor },
          { label: "Disable dark mode", action: close },
          { label: "Sign out", action: close },
        ]}
      />
      <Touchable action={open} style={styles.touch}>
        <View style={styles.button}>
          <Feather name={`more-${icon}`} size={18} color={colors.dark.font} />
        </View>
      </Touchable>
    </View>
  );
}

/*
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(signOut()),
});
export default connect(null, mapDispatchToProps)(MoreMenu);
*/

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
  },
  touch: {
    borderRadius: 16,
  },
  button: {
    padding: 4,
    borderRadius: 16,
    backgroundColor,
  },
});
