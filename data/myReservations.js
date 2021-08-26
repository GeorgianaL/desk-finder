import moment from "moment";
import { format } from "../utils/date";

export const myReservations = [
  {
    startDate: moment().format(format),
    endDate: moment().format(format),
    desk: 2,
    building: "UBC1",
    floor: 5,
    id: 3,
  },
  {
    startDate: moment("2021-08-17", format),
    endDate: moment("2021-08-19", format),
    desk: 2,
    building: "UBC1",
    floor: 4,
    id: 2,
  },
  {
    startDate: moment("2021-08-03", format),
    endDate: moment("2021-08-04", format),
    desk: 13,
    building: "UBC1",
    floor: 4,
    id: 1,
  },
];
