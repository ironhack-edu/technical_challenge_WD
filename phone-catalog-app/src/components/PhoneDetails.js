import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneDetails = ({ phoneId }) => {
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/phones/${phoneId}`);
        setPhone(response.data);
      } catch (error) {
        console.error('Error fetching phone details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoneDetails();
  }, [phoneId]);

  return (
    <div>
      <h2>Phone Details</h2>
        <div>
          <h3>{phone.name}</h3>
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Description: {phone.description}</p>
          <p>Color: {phone.color}</p>
          <p>Price: ${phone.price}</p>
          <p>Screen: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>Ram: {phone.ram} GB</p>
          <img
            src={`./images/${phone.imageFileName}`}
            alt={phone.name}
            style={{ maxWidth: '300px' }}
          />
        </div>
  
    </div>
  );
};

export default PhoneDetails;