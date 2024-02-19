import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
import subCategoryReducer from "./subCategoryReducer";

export default combineReducers({
  discover: commonReducer,
  faq: commonReducer,
  subCategory: commonReducer,
  discoverPlaces: subCategoryReducer,
});
