import React, { useState, useEffect } from "react";
import api from "../api";

const PhoneList = ({ onSelectPhone }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/phones")
      .then((response) => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching phones:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {phones.map((phone) => (
        <li key={phone.id} onClick={() => onSelectPhone(phone.id)}>
          {phone.name}
        </li>
      ))}
    </ul>
  );
};

export default PhoneList;
