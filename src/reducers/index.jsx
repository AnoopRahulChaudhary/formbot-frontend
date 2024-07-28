import { combineReducers } from "redux";
import formsReducer from "./forms";
import currentUserReducer from "./currentUser";

const reducer = combineReducers({
  formsReducer,
  currentUserReducer,
});

export default reducer;
