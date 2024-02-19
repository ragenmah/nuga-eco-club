import subCategoryService from "../../services/subCategory.service";
import {
  getAllRequestFail,
  getAllRequestSuccess,
  getAllSubCategoryDetailRequestSuccess,
  getbyIdSuccess,
  makeRequest,
} from "../commonActions";

export const GetSubCategoryByCategoryId = (id) => {
  return (dispatch) => {
    dispatch(makeRequest());
    subCategoryService
      .getAllSubCategoriesByCatId(id)
      .then((res) => {
        const _list = res.data;
        dispatch(getAllRequestSuccess(_list));
      })
      .catch((err) => {
        dispatch(getAllRequestFail("Failed to fetch the data"));
      });
  };
};

export const getPlacesBySubCategoryId = (id) => {
  return (dispatch) => {
    dispatch(makeRequest());
    subCategoryService
      .getPlacesBySubCategoryId(id)
      .then((res) => {
        const _list = res.data;
        dispatch(getAllSubCategoryDetailRequestSuccess(_list));
      })
      .catch((err) => {
        dispatch(getAllRequestFail("Failed to fetch the data"));
      });
  };
};
