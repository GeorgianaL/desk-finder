import actionTypes from "../actions/actionTypes";

const initialState = {
  all: [],
  buildings: [],
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_RESERVATIONS:
    case actionTypes.GET_BUILDINGS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.DELETE_RESERVATION:
      return {
        ...state,
        all: state.all.filter(
          (reservation) => reservation.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default reservationsReducer;
