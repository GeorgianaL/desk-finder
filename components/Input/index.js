import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input as BaseInput } from "react-native-elements";
import theme from "../../config/theme";

const styles = {
  inputContainerStyle: {
    base: {
      height: 45,
      paddingLeft: 20,
      paddingRight: 20,
      borderBottomColor: theme.colors.grey1,
      minWidht: 200,
    },
    focused: {
      height: 45,
      backgroundColor: theme.colors.white,
      borderRadius: 30,
      paddingLeft: 30,
      borderBottomWidth: 0,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
  },
  inputStyle: {
    base: {
      fontSize: 14,
      color: theme.colors.grey1,
    },
    focused: {
      fontSize: 14,
      color: theme.colors.black,
    },
  },
};

const Input = ({
  label,
  placeholder,
  leftIcon,
  style,
  onChange,
  disabled,
  errorMessage,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () =>
    isFocused ? setIsFocused(false) : setIsFocused(true);

  return (
    <BaseInput
      onFocus={handleFocus}
      label={label}
      placeholder={placeholder}
      leftIcon={leftIcon}
      style={style}
      onChangeText={onChange}
      disabled={disabled}
      errorMessage={errorMessage}
      inputContainerStyle={
        isFocused
          ? styles.inputContainerStyle.focused
          : styles.inputContainerStyle.base
      }
      inputStyle={
        isFocused ? styles.inputStyle.focused : styles.inputStyle.base
      }
      {...props}
    />
  );
};

Input.defaultProps = {
  disabled: false,
  label: "",
  placeholder: "Type here",
  leftIcon: null,
  style: {},
  errorMessage: null,
};

export default Input;
