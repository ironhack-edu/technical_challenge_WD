import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './components/Spinner';
import './App.css'

const PhoneList = ({ onSelect }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get("http://localhost:5005/phones");
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching phones:', error);
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {phones.map((phone) => (
            <div key={phone.id} onClick={() => onSelect(phone)}>
              <img src={`public/assets/images/${phone.imageFileName}`} alt={phone.name} />
              <p>{phone.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PhoneDetail = ({ selectedPhone }) => {
  return (
    <div>
      {selectedPhone ? (
        <div>
          <h2>{selectedPhone.name}</h2>
          <p>Manufacturer: {selectedPhone.manufacturer}</p>
          <p>Description: {selectedPhone.description}</p>
          <p>Color: {selectedPhone.color}</p>
          <p>Price: {selectedPhone.price}</p>
          <p>Screen: {selectedPhone.screen}</p>
          <p>Processor: {selectedPhone.processor}</p>
          <p>RAM: {selectedPhone.ram}</p>
          <img src={`public/assets/images/${selectedPhone.imageFileName}`} alt="" />
        </div>
      ) : (
        <p>Select a phone to view details</p>
      )}
    </div>
  );
};

const App = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);

  const handlePhoneSelect = (phone) => {
    setSelectedPhone(phone);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <h1>Phone Catalog</h1>
      <PhoneList onSelect={handlePhoneSelect} />
      <PhoneDetail selectedPhone={selectedPhone} />
    </div>
  );
};

export default App;
