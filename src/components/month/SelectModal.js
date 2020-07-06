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
import Touchable from "../Touchable";
import { colors } from "../../theme";

function MenuItem({ item, index, onSelect, color }) {
  const action = () => onSelect(item.value, index);
  return (
    <Touchable action={action}>
      <Text style={{ fontSize: 16, padding: 8, color }}>{item.label}</Text>
    </Touchable>
  );
}

export default function SelectModal({ show, close, options, onSelect }) {
  const theme = useColorScheme();
  const color = colors[theme].font;
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
              renderItem={({ item, index }) => (
                <MenuItem
                  item={item}
                  index={index}
                  onSelect={onSelect}
                  color={color}
                />
              )}
              keyExtractor={({ value }) => value}
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
