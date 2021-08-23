import axios from "axios";
import actionTypes from "./actionTypes";
import { getReservations } from "./reservations";
import { getBuildingsAndFloors } from "./reservations";

export const login =
  ({ username, password }) =>
  (dispatch) => {
    // axios.post("/login", { username, password }).then((response) => {
    dispatch({
      type: actionTypes.LOG_IN_SUCCESS,
      payload: {
        username,
        password,
      },
    });
    dispatch(getReservations());
    dispatch(getBuildingsAndFloors());
    // });
  };
