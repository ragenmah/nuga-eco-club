import { http, httpFile } from "../http-common";

class SubCategoryService {
  getAllSubCategoriesByCatId(id) {
    return http.get(`/sub-category/category/${id}`);
  }

  getPlacesBySubCategoryId(id) {
    return http.get(`/discover/sub_category/${id}`);
  }
}

export default new SubCategoryService();
