// src/pages/PhonesPage.jsx

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import PhoneCard from "../components/PhoneCard";

const API_URL = "http://localhost:3000";

export default function PhonesPage() {
  const [phones, setPhones] = useState([]);

  const getAllPhones = () => {
    axios
      .get(`${API_URL}/api/phones`)
      .then((response) => {
        console.log(response.data);
        setPhones(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div>
      <h2>Phones List</h2>
      <hr />
      <div>
        {phones.map((phone) => (
          <div key={phone.id}>
            <PhoneCard
              phone={{
                ...phone,
                imageUrl: `${API_URL}/assets/images/${phone.imageFileName}`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}