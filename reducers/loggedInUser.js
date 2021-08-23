import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  username: "",
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default logInReducer;
