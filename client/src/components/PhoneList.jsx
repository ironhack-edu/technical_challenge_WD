import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/phones")
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => {
        console.error("Error fetching phones:", error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Téléphones</h2>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
