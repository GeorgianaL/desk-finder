import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Text, Button } from "react-native-elements";
import DeskDetails from "../../components/DeskDetails";
import Paginator from "../../components/Paginator";
import AnimatedDonutChart from "../../components/AnimatedDonutChart";
import Status from "../../components/Status";

import { styles as FloorStyles } from "./SelectFloor";
import theme from "../../config/theme";
import moment from "moment";

const styles = {
  ...FloorStyles,
  availabilityContainer: {
    paddingLeft: 40,
    paddingRight: 20,
  },
  chartContainer: {
    justifyContent: "center",
    width: "100%",
    marginBottom: 50,
  },
  statusesContainer: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const Availability = ({
  availability,
  availableCount,
  unavailableCount,
  reservation,
  goNextPage,
  goBack,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <AnimatedDonutChart percentage={availability} />
      </View>

      <View style={styles.availabilityContainer}>
        <Text h3>Floor Availability</Text>
        <View style={styles.statusesContainer}>
          <Status
            typeLabel="Available"
            color={theme.colors.primary}
            count={availableCount}
          />
          <Status
            typeLabel="Unavailable"
            color={theme.colors.secondary}
            count={unavailableCount}
          />
        </View>
        <View style={styles.statusesContainer}>
          <DeskDetails
            floor={reservation.floor}
            building={reservation.building}
            startTime={reservation.startTime}
            endTime={reservation.endTime}
            date={reservation.date}
          />
        </View>
      </View>

      <View style={styles.statusesContainer}>
        <Button
          title="Cancel"
          type="clear"
          onPress={goBack}
          titleStyle={{ color: theme.colors.secondary }}
        />
        <Paginator onClick={goNextPage} />
      </View>
    </View>
  );
};

Availability.defaultProps = {
  availability: 0,
  availableCount: 0,
  unavailableCount: 0,
  reservation: {
    floor: 0,
    building: "",
    startTime: "Now",
    endTime: "19:00 PM",
    date: "",
  },
};

const mapStateToProps = (state) => ({
  availability: state.newReservation.floorAvailabilityPercent,
  availableCount: state.newReservation.availableDeskCount,
  unavailableCount: state.newReservation.unavailableDeskCount,
  reservation: {
    floor: state.newReservation.floor,
    building: state.newReservation.building,
    date: state.newReservation.reservationIsToday
      ? moment().format("Do MMMM")
      : "",
    startTime: "Now",
    endTime: "18:00 PM",
  },
});

export default connect(mapStateToProps, null)(Availability);
