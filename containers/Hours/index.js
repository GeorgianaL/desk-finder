import React, { useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, View, Dimensions } from "react-native";
import { Icon, Text, Button } from "react-native-elements";
import { setNewReservation } from "../../actions";
import RoundedPage, { paddingLeftRight } from "../../components/RoundedPage";
import Select from "../../components/Select";
import Paginator from "../../components/Paginator";
import theme from "../../config/theme";
import getWorkingHours from "./helpers";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grey2,
    paddingTop: 50,
    marginBottom: 0,
    flex: 1,
  },
  menubar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignSelf: "flex-start",
  },
  hoursContainer: {
    marginTop: 80,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 2 * paddingLeftRight,
    marginBottom: 20,
  },
  bottomContainer: {
    marginTop: 140,
    marginBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

const workingHours = getWorkingHours();

const Hours = ({ navigation, startDate, endDate, actions }) => {
  const [startTime, setStartTime] = useState(workingHours[1]);
  const [endTime, setEndTime] = useState(workingHours[workingHours.length - 1]);

  const saveReservationDates = () => {
    actions.setNewReservation({ startTime });
    actions.setNewReservation({ endTime });
    navigation.navigate("Availability");
  };

  return (
    <View style={styles.container}>
      <View style={styles.menubar}>
        <Icon name="menu" type="SimpleLineIcons" color="#000" size={30} />
      </View>
      <RoundedPage withMenu>
        <View>
          <Text h4>{`${moment(startDate).format("DD MMMM YYYY")}${
            !moment(startDate).isSame(moment(endDate))
              ? ` - ${moment(endDate).format("DD MMMM YYYY")}`
              : ""
          }`}</Text>
        </View>
        <View style={styles.hoursContainer}>
          <View style={styles.row}>
            <Text>Select start time:</Text>
            <Select
              value={startTime}
              options={workingHours}
              onValueChange={setStartTime}
            />
          </View>
          <View style={styles.row}>
            <Text>Select end time:</Text>
            <Select
              value={endTime}
              options={workingHours}
              onValueChange={setEndTime}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Button
            title="Cancel"
            type="clear"
            onPress={() => navigation.navigate("Calendar")}
            titleStyle={{ color: theme.colors.secondary }}
            style={{ flex: 1 }}
          />
          <Paginator
            onClick={saveReservationDates}
            disabled={!(startDate && endDate)}
          />
        </View>
      </RoundedPage>
    </View>
  );
};

Hours.defaultProps = {
  startDate: moment(),
  endDate: moment(),
};

const mapStateToProps = (state) => {
  const {
    newReservation: { reservation },
  } = state;
  const { startDate, endDate } = reservation;
  return {
    startDate,
    endDate,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      setNewReservation,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hours);
