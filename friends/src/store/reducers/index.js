import { combineReducers } from "redux";
import { friendsReducer as friends } from "./friendsReducer";
import { formReducer as form } from "./formReducer";

export default combineReducers({
  friends,
  form
});
