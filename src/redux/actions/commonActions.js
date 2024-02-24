import {
  MAKE_REQ,
  RETRIEVE_ALL,
  REQ_GETALL_FAIL,
  REQ_GETBYID_SUCC,
  RETRIEVE_ALL_SUB_CATEGORY,
  SEARCH_RESULT_LIST,
} from "./commonTypes";

export const makeRequest = () => {
  return {
    type: MAKE_REQ,
  };
};

export const getAllRequestSuccess = (data) => {
  return {
    type: RETRIEVE_ALL,
    payload: data,
  };
};

export const getAllSubCategoryDetailRequestSuccess = (data) => {
  return {
    type: RETRIEVE_ALL_SUB_CATEGORY,
    payload: data,
  };
};

export const searchResultSuccess = (data) => {
  return {
    type: SEARCH_RESULT_LIST,
    payload: data,
  };
};

export const getAllRequestFail = (err) => {
  return {
    type: REQ_GETALL_FAIL,
    payload: err,
  };
};

export const getbyIdSuccess = (data) => {
  return {
    type: REQ_GETBYID_SUCC,
    payload: data,
  };
};
