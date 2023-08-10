import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../PhoneList.css"
import { Link } from 'react-router-dom';

const PhoneList = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/phones')
      .then(response => {
        setPhones(response.data);
      })
      .catch(error => {
        console.error('Error fetching phones:', error);
      });
  }, []);

  return  (
    <div className="phone-list-container">
      <div className="container">
      <h1 className="welcome-heading">Welcome to PhoneCave!</h1>
      <h2 className="phone-list-title">Phone List</h2>
    </div>
      <div className="phone-cards-container">
        {phones.map(phone => (
          <Link to={`/phones/${phone.id}`} key={phone.id} className="phone-card">
            <div className="phone-card-content">
              <img src={`/images/${phone.imageFileName}`} alt={phone.name} className="phone-image" />
              <div className="phone-details">
                <h2>{phone.name}</h2>
                <p>Manufacturer: {phone.manufacturer}</p>
                <p>Color: {phone.color}</p>
                <p>Price: ${phone.price}</p>
            
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhoneList;
