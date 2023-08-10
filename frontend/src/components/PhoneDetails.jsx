import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import "../PhoneDetails.css"

const PhoneDetails = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5005/phones/${id}`)
      .then(response => {
        setPhone(response.data);
      })
      .catch(error => {
        console.error('Error fetching phone details:', error);
      });
  }, [id]);

  if (!phone) {
    return <div>Loading...</div>;
  }

  return (
    <div className="phone-details-container">
      <h1 className="phone-details-title">Phone Details</h1>
      <div className="phone-details-content">
        <h2 className="phone-name">{phone.name}</h2>
        <p className="phone-manufacturer">Manufacturer: {phone.manufacturer}</p>
        <p className="phone-screen">Screen: {phone.screen}</p>
        <p className="phone-processor">Processor: {phone.processor}</p>
        <p className="phone-ram">RAM: {phone.ram} GB</p>
        <p className="phone-description">{phone.description}</p>
        <img src={`/images/${phone.imageFileName}`} alt={phone.name} className="phone-image" />
      </div>
    </div>
  );
};

export default PhoneDetails;
