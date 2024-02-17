import { combineReducers } from "redux";
import discoverReducer from "./discoverReducer";

export default combineReducers({
  discover: discoverReducer,
});
