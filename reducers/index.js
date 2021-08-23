import { combineReducers } from "redux";
import user from "./loggedInUser";
import reservations from "./reservations";
import newReservation from "./newReservation";

export default combineReducers({
  user,
  reservations,
  newReservation,
});
