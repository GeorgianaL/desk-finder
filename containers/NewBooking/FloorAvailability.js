import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Text, Button } from "react-native-elements";
import Page from "../../components/Page";
import RoundedPage from "../../components/RoundedPage";
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
    paddingLeft: 20,
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
    width: "100%",
  },
};

const Availability = ({
  navigation,
  availability,
  availableCount,
  unavailableCount,
  reservation,
  goBack,
}) => {
  return (
    <Page>
      <RoundedPage withMenu>
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
            onPress={() => navigation.navigate("Floor")}
            titleStyle={{ color: theme.colors.secondary }}
            style={{ flex: 1 }}
          />
          <Paginator onClick={() => navigation.navigate("Map")} />
        </View>
      </RoundedPage>
    </Page>
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
