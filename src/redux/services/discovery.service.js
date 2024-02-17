import { http, httpFile } from "../http-common";

class DiscoveryService {
  getAll() {
    return http.get("/category");
  }

  get(id) {
    return http.get(`/category/${id}`);
  }

  getBySubCategoryId(id) {
    return http.get(`/category/sub_category/${id}`);
  }
}

export default new DiscoveryService();
