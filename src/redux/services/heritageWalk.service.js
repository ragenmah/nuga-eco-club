import { http, httpFile } from "../http-common";

class HeritagewalkService {
  getAll() {
    return http.get("/heritage-walk");
  }

  get(id) {
    return http.get(`/heritage-walk/${id}`);
  }

  getHeritagewalkDetail(slug) {
    return http.get(`/discover/detail/${slug}`);
  }
}

export default new HeritagewalkService();
