import theme from "../config/theme";
import moment from "moment";

// the format accepted by react-native-calendars
export const format = "YYYY-MM-DD";

export const todayDateString = moment().format(format);

export const today = {
  dateString: todayDateString,
};

// date object accepted
// {
//   day: 1,      // day of month (1-31)
//   month: 1,    // month of year (1-12)
//   year: 2017,  // year
//   timestamp,   // UTC timestamp representing 00:00 AM of this date
//   dateString: '2016-05-13' // date formatted as 'YYYY-MM-DD' string
// }

const getEventColor = (date) => {
  if (moment(date, format).isBefore(moment().subtract(1, "day"))) {
    return theme.colors.grey2;
  }
  return theme.colors.primary;
};

const getEventTextColor = (date) => {
  if (moment(date, format).isBefore(moment().subtract(1, "day"))) {
    return theme.colors.grey1;
  }
  return theme.colors.white;
};

const getDaysBetween = (startDateString, endDateString) => {
  let startDate = moment(startDateString, format);
  const endDate = moment(endDateString, format);

  let days = {};

  startDate = startDate.add(1, "days");

  while (startDate.isSameOrBefore(endDate)) {
    days = {
      ...days,
      [moment(startDate).format(format)]: {
        textColor: getEventTextColor(moment(startDate).format(format)),
        color: getEventColor(moment(startDate).format(format)),
        startingDay: false,
        endingDay: false,
      },
    };

    startDate.add(1, "days");
  }

  return days;
};

export const getMarkedDates = (startDateString, endDateString = null) => {
  const markedDates = {
    [startDateString]: {
      textColor: getEventTextColor(startDateString),
      color: getEventColor(startDateString),
      startingDay: true,
      endingDay: false,
    },
  };

  // for single day date-picker
  if (!endDateString || startDateString === endDateString) {
    return {
      ...markedDates,
      [startDateString]: {
        ...markedDates[startDateString],
        endingDay: true,
      },
    };
  }

  // multiple days picker
  const daysBetween = getDaysBetween(startDateString, endDateString);

  return {
    ...markedDates,
    ...daysBetween,
    [endDateString]: {
      textColor: getEventTextColor(endDateString),
      color: getEventColor(endDateString),
      startingDay: false,
      endingDay: true,
    },
  };
};

export const getMarkedDatesList = (events) =>
  events.reduce((acc, currentEvent) => {
    const eventMarkedDays = getMarkedDates(
      moment(currentEvent.startDate).format(format),
      moment(currentEvent.endDate).format(format)
    );
    acc = {
      ...acc,
      ...eventMarkedDays,
    };
    return acc;
  }, {});
