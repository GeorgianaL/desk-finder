import actionTypes from "./actionTypes";
import desks from "../data/desks-UBC1Et4.json";

import mapUBC1Et4 from "../assets/UBC1Et4.png";

export const setBuilding = (building) => (dispatch, getState) => {
  const {
    reservations: { buildings },
  } = getState();
  return dispatch({
    type: actionTypes.SET_RESERVATION_BUILDING,
    payload: {
      building,
      floor: buildings.find((item) => item.name === building).floors[0],
    },
  });
};

export const setFloor = (floor) => (dispatch) => {
  return dispatch({
    type: actionTypes.SET_RESERVATION_FLOOR,
    payload: {
      floor,
    },
  });
};

export const setToday = (isToday) => (dispatch) => {
  return dispatch({
    type: actionTypes.SET_RESERVATION_TODAY,
    payload: {
      isToday,
    },
  });
};

export const getFloorAvailability = () => (dispatch, getState) => {
  const {
    newReservation: { building, floor },
  } = getState();

  // TODO: axios.get(`/availability?building=${building}&floor=${floor}&day=${new Date()}`)
  return dispatch({
    type: actionTypes.GET_FLOOR_DATA,
    payload: {
      floorAvailabilityPercent: 56,
      availableDeskCount: 64,
      unavailableDeskCount: 52,
      mapSrc:
        "https://lh3.googleusercontent.com/vy5Z9QiHhbgKE2hCtAb-LaDaSQNMQc-KqQVFlCap2Z4XzNSmUaqMLXc6k6KfPH3gEREtBb9lOfF-ShXrmYxkoOIrW4KcuNPcrJBYIwY5JbldNGcoKLBPVBasaVV0rcNcEoDG1bcOCjrC4z6kwXgZIWk77t1u7nJaiFnWCO7rW9T3WKF2vRx_xZqTl-AmE0NVMdrG6SFEENPWQB9QBZ3XpTmxmul0v0Pz4LwqKG5CDK7jaMf10qSKCFTGlBcv2gPmc6kiEWNcHqtK5aBWbJnWl1qhkPXxMzCDAoSklFvXXDpXhbNIrmGpv1A4tMOWK2wATAjBSmSG4ekw690LJwoL-uPtA3n_oYbepvJH-dS19qJnvTv79-D4ADUE9Rz1aqEHxfgkoKUkh03hDuvZb35J1oO_uIzlg3W0qTAlDa0SQ5udflNI4cz3XCsQyL522kk7bZiCCo4_Wuiieg1iNrj2lIm6dQ01ZWKcU0MMzoqtzP7Xl-VNVkFKUuDGQhYcC4WQXG8fNVxSAkOmxt5_Z4Y-n3eHCl4qPz8BQwy7uOslL0iALkpY0D2Gs1gWg72jLQ71HfQ6V9MA0SK6SD8cZgpE0_hGoq7fQomlHFYajWZdr8jlRZAC07T3kFb_g-PRAZsU68zu0dADD-fxt1zP1U6bvVnisAxAIE-9Z5kTSvDFbaK_Q7fF37tSdpRdeaMBaRUEAYxLfv1MfLM7jr2Uu4YDmK4U=w1211-h729-no?authuser=0",
      desks,
    },
  });
};

export const quickReservationRequest = (deskNumber) => (dispatch, getState) => {
  const {
    newReservation: { building, floor },
  } = getState();

  // TODO: axios.put('/new', { reservation data })
  dispatch({
    type: actionTypes.QUICK_RESERVATION_REQUEST,
    payload: {
      deskNumber,
      success: true,
    },
  });
  // then
  // get updated data
  dispatch(getFloorAvailability());
};

export const clearPreviousReservation = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_RESERVATION_REQUEST,
  });
};

export const setNewReservation = (field, value) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_NEW_RESERVATION,
    payload: {
      field,
      value,
    },
  });
};
