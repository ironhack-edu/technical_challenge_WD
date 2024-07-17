import React from 'react';
import './PhoneDetails.css';
const PhoneDetails = ({ phone }) => {
  return (
    <div className="phone-details-container">
      <h2>{phone.name}</h2>
      <p>Manufacturer: {phone.manufacturer}</p>
      <p>Description: {phone.description}</p>
      <p>Color: {phone.color}</p>
      <p>Price: ${phone.price}</p>
      <p>Screen: {phone.screen}</p>
      <p>Processor: {phone.processor}</p>
      <p>RAM: {phone.ram}</p>
      <img src={`http://localhost:3000/assets/images/${phone.imageFileName}`} alt={phone.name} />
    </div>
  );
};

export default PhoneDetails;
