import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhoneDetails from './PhoneDetails';
import './PhoneList.css';


const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/phones')
      .then(response => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the phones!', error);
        setLoading(false);
      });
  }, []);

  const handlePhoneClick = (phone) => {
    setSelectedPhone(phone);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Phone List</h1>
      <ul className="phone-list">
        {phones.map(phone => (
          <li key={phone.id} onClick={() => handlePhoneClick(phone)} className="phone-button">
            {phone.name}
          </li>
        ))}
      </ul>
      {selectedPhone && <PhoneDetails phone={selectedPhone} />}
    </div>
  );
};

export default PhoneList;
