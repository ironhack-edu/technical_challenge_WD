// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // Ensure this is the correct base URL
});

export default api;
