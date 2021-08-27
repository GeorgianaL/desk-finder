import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import DeskDetails from "../../../components/DeskDetails";
import theme from "../../../config/theme";

const styles = StyleSheet.create({
  chartContainer: {
    justifyContent: "center",
    left: "40%",
    width: "100%",
    marginBottom: 20,
  },
  message: {
    textAlign: "center",
  },
});

const FailingBooking = () => {
  return (
    <View>
      <View style={styles.chartContainer}>
        <Icon
          reverse
          color={theme.colors.secondary}
          name="close"
          type="Fontisto"
          size={50}
        />
      </View>
      <Text h4 style={styles.message}>
        This desk is already reserved
      </Text>
    </View>
  );
};

export default FailingBooking;
