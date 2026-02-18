import axios from "axios";
import { Phone } from "../types/Phone";

// interface PhoneResp {
//   Phone: {
//     id: number;
//   };
// }

const API_URL = "http://localhost:5005";

export const getPhones = async (): Promise<Phone[]> => {
  const { data } = await axios.get(`${API_URL}/phones`);
  return data;
};

export const getPhoneById = async (id: number): Promise<Phone> => {
  const { data } = await axios.get(`${API_URL}/phones/${id}`);
  return data;
};
