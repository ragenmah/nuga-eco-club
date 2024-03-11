import { http } from "../http-common";

class AuthService {
  register() {
    return http.post(`/user/register`);
  }
}

export default new AuthService();
