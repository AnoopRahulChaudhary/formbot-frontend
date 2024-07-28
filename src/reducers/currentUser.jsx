import { ADD_CURRENT_USER, DELETE_CURRENT_USER } from "../actions/currentUser.js";

const currentUser = {};

const reducer = (state = currentUser, action) => {
  switch (action.type) {
    case ADD_CURRENT_USER:
      return {
        ...state,
        username: action.payload.username,
      };
    case DELETE_CURRENT_USER:
      return {
        ...state,
        username: "",
      };
    default:
      return state;
  }
};

export default reducer;
