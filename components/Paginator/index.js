import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
  },
});

const Paginator = ({ onClick }) => {
  return (
    <View style={styles.container}>
      <Icon
        reverse
        color={theme.colors.primary}
        name="arrow-forward-ios"
        type="MaterialIcons"
        onPress={onClick}
      />
    </View>
  );
};

export default Paginator;
