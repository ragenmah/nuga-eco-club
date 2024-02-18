import { http, httpFile } from "../http-common";

class FaqsServices {
  getAll() {
    return http.get("/faqs");
  }

  get(id) {
    return http.get(`/faqs/${id}`);
  }

}

export default new FaqsServices();
