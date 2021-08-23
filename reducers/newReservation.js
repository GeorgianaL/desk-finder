import actionTypes from "../actions/actionTypes";

const initialState = {
  building: "",
  floor: "",
  desk: null,
  reservationIsToday: true,
  floorAvailabilityPercent: 0,
  availableDeskCount: 0,
  unavailableDeskCount: 0,
  mapSrc: "",
  desks: [],
  successfullyRequest: false,
};

const newReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RESERVATION_FLOOR:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.SET_RESERVATION_BUILDING:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.GET_BUILDINGS:
      return {
        ...state,
        building: action.payload.buildings[0].name,
        floor: action.payload.buildings[0].floors[0],
      };
    case actionTypes.SET_RESERVATION_TODAY:
      return {
        ...state,
        reservationIsToday: action.payload.isToday,
      };
    case actionTypes.GET_FLOOR_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.NEW_RESERVATION_REQUEST:
      return {
        ...state,
        desk: action.payload.deskNumber,
        successfullyRequest: action.payload.success,
      };
    case actionTypes.CLEAR_RESERVATION_REQUEST:
      return {
        ...state,
        successfullyRequest: false,
      };
    default:
      return state;
  }
};

export default newReservationReducer;
