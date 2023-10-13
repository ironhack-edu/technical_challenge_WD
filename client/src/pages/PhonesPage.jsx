import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhoneCard from "../components/Phonecard";

const API_URL = "http://localhost:3000";

function PhonesPage() {
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
      <hr></hr>
      <div className="phones-container">
        {phones.map((phone) => (
          <div className="phone-container" key={phone.id}>
            <PhoneCard phone={phone} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhonesPage;
