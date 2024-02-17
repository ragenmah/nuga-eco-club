import {
  MAKE_REQ,
  RETRIEVE_ALL,
  REQ_GETALL_SUCC,
  REQ_GETALL_FAIL,
  REQ_GETBYID_SUCC,
} from "../actions/commonTypes";

const initialState = {
  isloading: false,
  allList: [],
  allObj: { name: "" },
  errormessage: "",
};

function discoverReducer(state = initialState, action) {
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
        allObj: payload,
      };

    case REQ_GETALL_SUCC:
      return {
        ...state,
        isloading: false,
        allList: payload,
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

export default discoverReducer;
