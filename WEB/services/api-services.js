import axios from "axios";

const service = axios.create({
    withCredentials: true,
    baseURL: "http://127.0.0.1:3000/v1",
  });

  export function allPhones() {
    return service.get("/phone").then((response) => response.data);
  }