// src/components/PhoneDetails.js
import React, { useState, useEffect } from "react";
import api from "../api";

const PhoneDetails = ({ phoneId }) => {
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/phones/${phoneId}`).then((response) => {
      setPhone(response.data);
      setLoading(false);
    });
  }, [phoneId]);

  if (loading) return <div>Loading...</div>;
  if (!phone) return <div>Phone not found</div>;

  return (
    <div>
      <h2>{phone.name}</h2>
      <p>{phone.description}</p>
      <p>Manufacturer: {phone.manufacturer}</p>
      <p>Color: {phone.color}</p>
      <p>Price: ${phone.price}</p>
      <p>Screen: {phone.screen}</p>
      <p>Processor: {phone.processor}</p>
      <p>RAM: {phone.ram}</p>
      <img src={phone.imageFileName} alt={phone.name} />
    </div>
  );
};

export default PhoneDetails;
