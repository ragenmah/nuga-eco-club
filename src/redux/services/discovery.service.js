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

  getDiscoverPlaceDetail(slug) {
    return http.get(`/discover/detail/${slug}`);
  }

  updateVisitCount(id) {
    return http.put(`/discover/visit/${id}`);
  }
}

export default new DiscoveryService();
