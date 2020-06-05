import React from "react";
import {
  Modal,
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Touchable from "../../../components/Touchable";
import { colors } from "../../../theme";

function MenuItem({ label, action }) {
  return (
    <Touchable style={styles.item} action={action}>
      <Text style={styles.text}>{label}</Text>
    </Touchable>
  );
}

export default function ModalMenu({ show, close, options }) {
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
          <View>
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <MenuItem label={item.label} action={item.action} />
              )}
              keyExtractor={({ label }) => label}
              style={styles.list}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

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
  list: {
    backgroundColor: colors.dark.background,
    borderColor: colors.dark.border,
    borderWidth: 1,
    borderStyle: "solid",
    margin: 80,
    borderRadius: 4,
    flex: 0,
  },
  item: {
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: colors.dark.font,
  },
});
