class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
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