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

  searchHeritageWalk(name, district, municipality, ward) {
    return http.get(
      `/heritage-walk/search/heritage?name=${name}&district=${
        district ?? ""
      }&municipality=${municipality ?? ""}&ward=${ward ?? ""}`
    );
  }
}

export default new HeritagewalkService();
