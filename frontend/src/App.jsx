import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios.get('http://localhost:3000/phones')
          .then(response => {
              setPhones(response.data);
              setLoading(false);
          });
  }, []);

  return (
      <div className="App">
          {loading ? (
              <div>Loading...</div>  // This is the spinner/place marker
          ) : (
              <>
                  <PhoneList phones={phones} onSelect={setSelectedPhone} />
                  {selectedPhone && <PhoneDetail phone={selectedPhone} />}
              </>
          )}
      </div>
  );
}

function PhoneList({ phones, onSelect }) {
  return (
      <ul>
          {phones.map(phone => (
              <li key={phone.id} onClick={() => onSelect(phone)}>
                  {phone.name}
              </li>
          ))}
      </ul>
  );
}

function PhoneDetail({ phone }) {
  return (
      <div>
          <img src={`/public/images/${phone.imageFileName}`} alt={phone.name} className="phone-image" />
          <h2>{phone.name}</h2>
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Description: {phone.description}</p>
          <p>Price: ${phone.price}</p>
      </div>
  );
}

export default App;