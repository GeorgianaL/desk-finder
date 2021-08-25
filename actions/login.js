import axios from "axios";
import actionTypes from "./actionTypes";
import { getReservations } from "./reservations";
import { getBuildingsAndFloors } from "./reservations";

export const login =
  ({ email, password }) =>
  (dispatch) => {
    // axios.post("/login", { email, password }).then((response) => {
    dispatch({
      type: actionTypes.LOG_IN_SUCCESS,
      payload: {
        email,
        password,
        username: "Georgiana",
      },
    });
    dispatch(getReservations());
    dispatch(getBuildingsAndFloors());
    // });
  };
