import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  statusName: {
    flexDirection: "row",
    alignItems: "center",
  },
  coloredDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  countText: {
    color: theme.colors.grey1,
    marginLeft: 20,
  },
});

const Status = ({ typeLabel, color, count }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusName}>
        <View
          style={{
            ...styles.coloredDot,
            backgroundColor: color,
            marginRight: 10,
          }}
        ></View>
        <Text>{typeLabel}</Text>
      </View>
      <Text style={styles.countText}>{`${count} desks`}</Text>
    </View>
  );
};

Status.defaultProps = {
  typeLabel: "Available",
  color: "green",
  count: 0,
};

export default Status;
