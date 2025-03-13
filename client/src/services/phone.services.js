import axios from "axios";

const createHttp = () => {
  const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  })

  return http;
};

const http = createHttp();

export const  listAllPhonesService = () => http.get("http://localhost:3000/phones");
export const  listPhoneDetails = (id) => http.get(`http://localhost:3000/phones/${id}`);