import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5005/phones')
      .then(response => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handlePhoneSelect = (phoneId) => {
    const selected = phones.find(phone => phone.id === phoneId);
    setSelectedPhone(selected);
  };

  return (
    <div className="App">
      {loading && <div className="loading">Loading...</div>}
      {!loading && (
        <div>
          <h1 className="title">Phone Catalog</h1>
          <ul className="phone-list">
            {phones.map(phone => (
              <li key={phone.id} onClick={() => handlePhoneSelect(phone.id)} className="phone-item">
                {phone.name}
              </li>
            ))}
          </ul>
          {selectedPhone && (
            <div className="phone-details">
              <h2>{selectedPhone.name}</h2>
              <h3>Manufacturer: {selectedPhone.manufacturer}</h3>
              <p>{selectedPhone.description}</p>
              <p><strong>Color:</strong> {selectedPhone.color}</p>
              <p><strong>Price:</strong> ${selectedPhone.price}</p>
              <img src={`/images/${selectedPhone.imageFileName}`} alt='phone image' className="phone-image"/>
              <p><strong>Screen:</strong> {selectedPhone.screen}</p>
              <p><strong>Processor:</strong> {selectedPhone.processor}</p>
              <p><strong>RAM:</strong> {selectedPhone.ram} GB</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
