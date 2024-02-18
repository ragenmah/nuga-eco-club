import { combineReducers } from "redux";
import commonReducer from "./discoverReducer";

export default combineReducers({
  discover: commonReducer,
  faq: commonReducer,
});
