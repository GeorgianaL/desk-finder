import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { CalendarList } from "react-native-calendars";
import { today, todayDateString, getMarkedDates } from "../../utils/date";

const Calendar = () => {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(null);

  return (
    <ScrollView>
      <CalendarList
        monthFormat={"MMMM yyyy"}
        pastScrollRange={0}
        futureScrollRange={6}
        scrollEnabled={true}
        showScrollIndicator={true}
        horizontal={true}
        pagingEnabled={true}
        calendarWidth={Dimensions.get("window").width}
        firstDay={1}
        markingType={"period"}
        onDayPress={startDate ? setEndDate : setStartDate}
        markedDates={
          endDate
            ? getMarkedDates(startDate.dateString, endDate.dateString)
            : getMarkedDates(startDate.dateString)
        }
        minDate={todayDateString}
      />
    </ScrollView>
  );
};

export default Calendar;
