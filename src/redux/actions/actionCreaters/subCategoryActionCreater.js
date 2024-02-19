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
        // if (
        //   _list &&
        //   Object.keys(_list).length === 0 &&
        //   _list.constructor === Object
        // ) {
        //   dispatch(getAllSubCategoryDetailRequestSuccess(_list));
        // } else {

        // }
        dispatch(getPlacesListBySubCategoryId(_list[0].sub_category_id ?? "0"));

        dispatch(getAllRequestSuccess(_list));
      })
      .catch((err) => {
        dispatch(getAllRequestFail("Failed to fetch the data"));
      });
  };
};

export const getPlacesListBySubCategoryId = (id) => {
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
