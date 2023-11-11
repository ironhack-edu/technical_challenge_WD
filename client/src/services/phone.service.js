import axios from "axios";

class Phone {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  // GET /api/phone
  getAll = async () => {
    return this.api.get("/phones");
  };

  // GET /api/phone/:id
  getOne = async (id) => {
    return this.api.get(`/phones/${id}`);
  };
}

// Create one instance of the service
const phoneService = new Phone();

export default phoneService;
