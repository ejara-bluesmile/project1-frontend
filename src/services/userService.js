import http from "./httpService";
import { apiUrl } from "../config.json";

const endpointUser = apiUrl + "/user";

export function register(user) {
  return http.post(endpointUser, {
    email: user.email,
    password: user.password,
    name: user.name,
    lastname: user.lastname,
    createAt: "",
  });
}
