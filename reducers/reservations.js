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

    default:
      return state;
  }
};

export default reservationsReducer;
