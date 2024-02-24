import { http, httpFile } from "../http-common";

class HeritagewalkService {
  getAll() {
    return http.get("/heritage-walk");
  }

  get(id) {
    return http.get(`/heritage-walk/${id}`);
  }

  getHeritagewalkStepsDetail(slug) {
    return http.get(`/heritage-walk/walk-steps-detail/${slug}`);
  }
}

export default new HeritagewalkService();
