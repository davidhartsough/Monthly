import React, { useState } from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { Feather } from "@expo/vector-icons";
import SelectModal from "./SelectModal";
import Touchable from "../Touchable";
import { colors } from "../../theme";
import { monthOptions } from "../../date-utils";

function MonthArrow({ direction, action, disabled }) {
  const theme = useColorScheme();
  return (
    <View>
      <Touchable action={action} style={styles.touch} disabled={disabled}>
        <View style={styles.button}>
          <Feather
            name={`chevron-${direction}`}
            size={24}
            color={
              disabled ? colors[theme].disabledButtonFont : colors[theme].font
            }
          />
        </View>
      </Touchable>
    </View>
  );
}

export default function MonthPicker({ updateMonth }) {
  const theme = useColorScheme();
  const [show, setShow] = useState(false);
  const [monthIndex, setMonthIndex] = useState(0);
  function onSelect(value, index) {
    setMonthIndex(index);
    updateMonth(value);
    close();
  }
  function goToPrevMonth() {
    const newMonthIndex = monthIndex + 1;
    setMonthIndex(newMonthIndex);
    const newMonth = monthOptions[newMonthIndex].value;
    updateMonth(newMonth);
  }
  function goToNextMonth() {
    const newMonthIndex = monthIndex - 1;
    setMonthIndex(newMonthIndex);
    const newMonth = monthOptions[newMonthIndex].value;
    updateMonth(newMonth);
  }
  const open = () => setShow(true);
  const close = () => setShow(false);
  return (
    <View style={styles.container}>
      <MonthArrow
        direction="left"
        action={goToPrevMonth}
        disabled={monthIndex === monthOptions.length - 1}
      />
      <View style={styles.pickerContainer}>
        <SelectModal
          show={show}
          close={close}
          options={monthOptions}
          onSelect={onSelect}
        />
        <Touchable
          style={[styles.opener, { borderColor: colors[theme].border }]}
          action={open}
        >
          <Text style={[styles.text, { color: colors[theme].font }]}>
            {monthOptions[monthIndex].label}
          </Text>
        </Touchable>
      </View>
      <MonthArrow
        direction="right"
        action={goToNextMonth}
        disabled={monthIndex === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  pickerContainer: {
    marginLeft: 8,
    marginRight: 8,
    width: 120,
  },
  opener: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
