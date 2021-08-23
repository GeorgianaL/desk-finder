import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  container: {
    color: theme.colors.black,
    borderRadius: 30,
    backgroundColor: theme.colors.white,
    marginBottom: 16,
    paddingLeft: 16,
    ...theme.shadow,
  },
  pickerStyle: {
    height: 50,
    width: 280,
  },
  itemStyle: {
    color: theme.colors.black,
    backgroundColor: theme.colors.secondary,
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
  },
});

const Select = ({ value, onValueChange, options }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={value}
        style={styles.pickerStyle}
        onValueChange={onValueChange}
        mode="dropdown"
        itemStyle={styles.itemStyle}
        dropdownIconColor={theme.colors.primary}
      >
        {options.map((option) => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>
    </View>
  );
};

export default Select;
