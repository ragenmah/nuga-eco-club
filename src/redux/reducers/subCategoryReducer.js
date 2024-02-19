import {
  MAKE_REQ,
  RETRIEVE_ALL,
  REQ_GETALL_SUCC,
  REQ_GETALL_FAIL,
  REQ_GETBYID_SUCC,
} from "../actions/commonTypes";

const initialState = {
  isloading: false,
  subCategoryList: [],
  subCategoryObj: { name: "" },
  errormessage: "",
};

function subCategoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MAKE_REQ:
      return {
        ...state,
        isloading: true,
      };

    case REQ_GETBYID_SUCC:
      return {
        ...state,
        isloading: false,
        subCategoryObj: payload,
      };

    case REQ_GETALL_SUCC:
      return {
        ...state,
        isloading: false,
        subCategoryList: payload,
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
        subCategoryList: payload,
      };

    default:
      return state;
  }
}

export default subCategoryReducer;
