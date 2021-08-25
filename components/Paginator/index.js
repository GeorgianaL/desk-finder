import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
});

const Paginator = ({ onClick, disabled }) => {
  return (
    <View style={styles.container}>
      <Icon
        reverse
        color={disabled ? theme.colors.grey1 : theme.colors.primary}
        name="arrow-forward-ios"
        type="MaterialIcons"
        onPress={onClick}
      />
    </View>
  );
};

Paginator.defaultProps = {
  disabled: false,
};

export default Paginator;
