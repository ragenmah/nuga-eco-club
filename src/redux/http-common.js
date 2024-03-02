import axios from "axios";
import { base_url } from "./services/api";

export const http = axios.create({
  baseURL: base_url,
  headers: {
    "Content-type": "application/json",
  },
});

export const httpFile = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
