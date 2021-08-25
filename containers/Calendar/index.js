import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Dimensions, StyleSheet } from "react-native";
import { Text, Button, Icon } from "react-native-elements";
import { CalendarList } from "react-native-calendars";
import Paginator from "../../components/Paginator";
import RoundedPage, { paddingLeftRight } from "../../components/RoundedPage";
import {
  format,
  todayDateString,
  getMarkedDates,
  getMarkedDatesList,
} from "../../utils/date";
import theme from "../../config/theme";
import moment from "moment";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grey2,
    paddingTop: 50,
    marginBottom: 0,
    flex: 1,
    height: Dimensions.get("window").height,
  },
  menubar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignSelf: "flex-start",
  },
  calendarContainer: {
    marginTop: 0,
    height: 400,
  },
  calendarStyles: {
    height: 400,
  },
  dates: {
    marginTop: 20,
    marginBottom: 60,
  },
  devider: {
    height: 1,
    backgroundColor: theme.colors.grey1,
    marginTop: 8,
    marginBottom: 8,
  },
  bottomContainer: {
    marginBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const dateTextElement = (label, date = null) => (
  <View>
    {!date ? (
      <Text>{`Select the ${label}`}</Text>
    ) : (
      <View style={{ flexDirection: "row" }}>
        <Text>{capitalizeFirstLetter(label)}: </Text>
        <Text style={{ fontWeight: "700" }}>
          {moment(date.dateString, format).format("DD MMMM YYYY")}
        </Text>
      </View>
    )}
  </View>
);

const Calendar = ({ navigation, reservations }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const allReservations = getMarkedDatesList(reservations);
  let markedReservations = allReservations;

  if (startDate) {
    const currentReservation = endDate
      ? getMarkedDates(startDate.dateString, endDate.dateString)
      : getMarkedDates(startDate.dateString);
    markedReservations = { ...allReservations, ...currentReservation };
  }

  return (
    <View style={styles.container}>
      <View style={styles.menubar}>
        <Icon name="menu" type="SimpleLineIcons" color="#000" size={30} />
      </View>
      <RoundedPage withMenu>
        <View style={styles.calendarContainer}>
          <CalendarList
            monthFormat={"MMMM yyyy"}
            pastScrollRange={0}
            futureScrollRange={6}
            scrollEnabled={true}
            showScrollIndicator={true}
            horizontal={true}
            pagingEnabled={true}
            calendarWidth={
              Dimensions.get("window").width - 2 * paddingLeftRight
            }
            style={styles.calendarStyles}
            firstDay={1}
            markingType={"period"}
            onDayPress={startDate ? setEndDate : setStartDate}
            markedDates={markedReservations}
            minDate={todayDateString}
            theme={{
              textMonthFontWeight: "bold",
            }}
          />
        </View>
        <View style={styles.dates}>
          {dateTextElement("start date", startDate)}
          {startDate && <View style={styles.devider} />}
          {startDate && dateTextElement("end date", endDate)}
        </View>
        <View style={styles.bottomContainer}>
          <Button
            title="Cancel"
            type="clear"
            onPress={() => navigation.navigate("LandingPage")}
            titleStyle={{ color: theme.colors.secondary }}
            style={{ flex: 1 }}
          />
          <Paginator onClick={() => null} disabled={!(startDate && endDate)} />
        </View>
      </RoundedPage>
    </View>
  );
};

Calendar.defaultProps = {
  reservations: [],
};

const mapStateToProps = (state) => ({
  reservations: state.reservations.all,
});

export default connect(mapStateToProps, null)(Calendar);
