import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5005/api/v1",
    });
  }

  getAllPhones() {
    return this.api.get("/phones");
  }

  getPhoneById(id) {
    return this.api.get(`/phones/${id}`);
  }
}

export const apiConnect = new Api();
