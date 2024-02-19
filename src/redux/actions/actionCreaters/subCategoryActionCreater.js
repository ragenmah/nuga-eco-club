import subCategoryService from "../../services/subCategory.service";
import {
  getAllRequestFail,
  getAllRequestSuccess,
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
