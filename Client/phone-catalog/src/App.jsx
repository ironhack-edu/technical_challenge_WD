import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/phones")
      .then((response) => {
        setPhones(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlePhoneSelect = (phone) => {
    setSelectedPhone(phone);
  };

  return (
    <div className="App">
      <h1>Phone Catalog</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="phone-list">
          <div className="phone-list__item">
            <h2>Phone Models</h2>
            <ul>
              {phones.map((phone) => (
                <li key={phone.id} onClick={() => handlePhoneSelect(phone)}>
                  {phone.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="phone-list__item">
            {selectedPhone ? (
              <div>
                <h2>{selectedPhone.name}</h2>
                <img
                  src={require(`../public/images/${selectedPhone.imageFileName}`)}
                  alt={selectedPhone.name}
                />
                <p>{selectedPhone.description}</p>
                <p>Manufacturer: {selectedPhone.manufacturer}</p>
                <p>Color: {selectedPhone.color}</p>
                <p>Price: ${selectedPhone.price}</p>
                <p>Screen: {selectedPhone.screen}</p>
                <p>Processor: {selectedPhone.processor}</p>
                <p>RAM: {selectedPhone.ram} GB</p>
              </div>
            ) : (
              <p>Select a phone to view details</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
