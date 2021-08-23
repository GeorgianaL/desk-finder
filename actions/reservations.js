import axios from "axios";
import actionTypes from "./actionTypes";
import { buildings } from "../data/buildings";

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
      all: [
        {
          date: new Date(),
          desk: "2",
          floor: 5,
          building: "Building 2",
          startTime: "8:00 AM",
          endTime: "17:00 PM",
        },
      ],
    },
  });
  // });
};
