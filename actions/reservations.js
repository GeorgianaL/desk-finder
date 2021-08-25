import axios from "axios";
import actionTypes from "./actionTypes";
import { buildings } from "../data/buildings";
import { myReservations } from "../data/myReservations";

export const getBuildingsAndFloors = () => (dispatch) => {
  return dispatch({
    type: actionTypes.GET_BUILDINGS,
    payload: {
      buildings,
    },
  });
};

export const getReservations = () => (dispatch) => {
  // axios.get("/user-reservations").then((response) => {
  return dispatch({
    type: actionTypes.GET_USER_RESERVATIONS,
    payload: {
      all: myReservations.map((reservation) => ({
        ...reservation,
        startTime: reservation.startTime || "9:00 AM",
        endTime: reservation.endTime || "18:00 PM",
      })),
    },
  });
  // });
};
