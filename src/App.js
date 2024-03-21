import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/phones');
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching phones:', error);
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  const handlePhoneSelect = (phone) => {
    setSelectedPhone(phone);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page

  };

  return (
    <div className="container">
      {selectedPhone && (
        <div className="selected-phone">
          <h2>{selectedPhone.name}</h2>
          <img src={process.env.PUBLIC_URL + `/images/${selectedPhone.imageFileName}`} alt={selectedPhone.name} className="selected-phone-image" />
          <p>Manufacturer: {selectedPhone.manufacturer}</p>
          <p>Description: {selectedPhone.description}</p>
          <p>Color: {selectedPhone.color}</p>
          <p>Price: ${selectedPhone.price}</p>
          <p>Screen: {selectedPhone.screen}</p>
          <p>Processor: {selectedPhone.processor}</p>
          <p>RAM: {selectedPhone.ram} GB</p>
        </div>
      )}
      <h1>Phone Selection</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="phone-list">
          {phones.map((phone) => (
            <div key={phone.id} className="phone-card" onClick={() => handlePhoneSelect(phone)}>
              <img src={process.env.PUBLIC_URL + `/images/${phone.imageFileName}`} alt={phone.name} className="phone-image" />
              <div className="phone-details">
                <h2>{phone.name}</h2>
                <p>{phone.manufacturer}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}

export default App;
