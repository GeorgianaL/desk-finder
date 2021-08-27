import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import DeskDetails from "../../../components/DeskDetails";
import AnimatedCheckmark from "../../../components/AnimatedCheckmark";

const styles = StyleSheet.create({
  chartContainer: {
    justifyContent: "center",
    width: "100%",
    marginBottom: 50,
  },
});

const SuccessfulBooking = ({ reservation }) => {
  return (
    <View>
      <View style={styles.chartContainer}>
        <AnimatedCheckmark />
      </View>
      <Text h4>You successfully booked your desk</Text>
      <DeskDetails
        deskNumber={reservation.deskNumber}
        floor={reservation.floor}
        building={reservation.building}
        startTime={reservation.startTime}
        endTime={reservation.endTime}
        date={reservation.date}
      />
    </View>
  );
};

export default SuccessfulBooking;
