import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  text: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  devider: {
    height: 1,
    backgroundColor: theme.colors.grey1,
  },
});

const DeskDetails = ({
  deskNumber,
  floor,
  building,
  startTime,
  endTime,
  date,
}) => (
  <View>
    {deskNumber && <Text h4 style={styles.text}>{`Desk ${deskNumber}`}</Text>}
    <Text style={styles.text}>{`${floor} - ${building}`}</Text>
    <View style={styles.devider} />
    <Text style={styles.text}>{`${startTime} - ${endTime}`}</Text>
    <Text style={styles.text}>{`${date}`}</Text>
  </View>
);

DeskDetails.defaultProps = {
  deskNumber: null,
  floor: 1,
  building: "Building 1",
  startTime: "Now",
  endTime: "19:00 PM",
  date: "20 August",
};

export default DeskDetails;
