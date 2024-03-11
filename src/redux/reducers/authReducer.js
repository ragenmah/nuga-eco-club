import {
  MAKE_REQ,
  RETRIEVE_ALL,
  REQ_GETALL_SUCC,
  REQ_GETALL_FAIL,
  REQ_GETBYID_SUCC,
  RETRIEVE_ALL_SUB_CATEGORY,
  SEARCH_RESULT_LIST,
} from "../actions/commonTypes";

const initialState = {
  isloading: false,
  allList: [],
  subCategoryList: [],
  searchResultList: [],
  allObj: {},
  errormessage: "",
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MAKE_REQ:
      return {
        ...state,
        isloading: true,
        subCategoryList: [],
        // allList: payload,
      };

    case REQ_GETBYID_SUCC:
      return {
        ...state,
        isloading: false,
        allObj: payload,
      };

    case REQ_GETALL_SUCC:
      return {
        ...state,
        isloading: false,
        allList: payload,
      };

    case RETRIEVE_ALL_SUB_CATEGORY:
      return {
        ...state,
        isloading: false,
        subCategoryList: payload,
      };

    case SEARCH_RESULT_LIST:
      return {
        ...state,
        isloading: false,
        searchResultList: payload,
      };

    case REQ_GETALL_FAIL:
      return {
        ...state,
        isloading: false,
        companylist: [],
        errormessage: payload,
      };

    case RETRIEVE_ALL:
      return {
        ...state,
        isloading: false,
        allList: payload,
      };

    default:
      return state;
  }
}

export default authReducer;
