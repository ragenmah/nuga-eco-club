import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
import subCategoryReducer from "./subCategoryReducer";
import authReducer from "./authReducer";

export default combineReducers({
  discover: commonReducer,
  faq: commonReducer,
  subCategory: commonReducer,
  discoverPlaces: subCategoryReducer,
  heritageWalk: commonReducer,
  auth: authReducer,
});
