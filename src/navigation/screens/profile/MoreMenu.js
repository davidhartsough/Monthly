import React, { useState } from "react";
import { View, StyleSheet, Platform, useColorScheme } from "react-native";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/auth";
import Touchable from "../../../components/Touchable";
import { colors } from "../../../theme";
import ModalMenu from "./ModalMenu";
import NameEditor from "./NameEditor";

const icon = Platform.OS === "ios" ? "horizontal" : "vertical";

function MoreMenu({ logOut }) {
  const theme = useColorScheme();
  const [show, setShow] = useState(false);
  const [editorVisible, setEditorVisible] = useState(false);
  const close = () => setShow(false);
  function openEditor() {
    close();
    setEditorVisible(true);
  }
  const open = () => setShow(true);
  const closeEditor = () => setEditorVisible(false);
  function onSignOut() {
    close();
    logOut();
  }
  const backgroundColor =
    Platform.OS === "ios" ? colors[theme].touchableUnderlay : "transparent";
  return (
    <View style={styles.container}>
      <NameEditor close={closeEditor} show={editorVisible} />
      <ModalMenu
        close={close}
        show={show}
        options={[
          { label: "Edit name", action: openEditor },
          { label: "Sign out", action: onSignOut },
        ]}
      />
      <Touchable action={open} style={styles.touch}>
        <View style={[styles.button, { backgroundColor }]}>
          <Feather name={`more-${icon}`} size={18} color={colors[theme].font} />
        </View>
      </Touchable>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(signOut()),
});
export default connect(null, mapDispatchToProps)(MoreMenu);

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
  },
});
