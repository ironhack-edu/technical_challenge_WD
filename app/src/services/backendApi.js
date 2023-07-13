import axios from "axios";

export default axios.create({
    // We set our API's base URL so that all requests use the same base URL
    baseURL: "http://localhost:3000"
  });