import React from "react";
import {
  Modal,
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import Touchable from "../../../components/Touchable";
import { colors } from "../../../theme";

function MenuItem({ label, action }) {
  const theme = useColorScheme();
  return (
    <Touchable action={action}>
      <Text
        style={{
          fontSize: 16,
          padding: 16,
          color: colors[theme].font,
        }}
      >
        {label}
      </Text>
    </Touchable>
  );
}

export default function ModalMenu({ show, close, options }) {
  const theme = useColorScheme();
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
              style={[
                styles.list,
                {
                  backgroundColor: colors[theme].background,
                  borderColor: colors[theme].border,
                },
              ]}
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
    borderWidth: 1,
    borderStyle: "solid",
    margin: 80,
    borderRadius: 4,
    flex: 0,
  },
});
