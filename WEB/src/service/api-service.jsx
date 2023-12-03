import axios from "axios";

const service = axios.create(

  {
    withCredentials: true,
    baseURL : import.meta.env.REACT_APP_BASE_API_URL || 'http://localhost:3000'
  }

);

service.interceptors.response.use(
  response => response.data,
)

export function getPhones() {
  return service.get('/phones')
}

export function getPhoneDetails(id) {
  return service.get(`/phones/${id}`)
}