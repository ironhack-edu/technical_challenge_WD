import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      const response = await axios.get('http://localhost:3000/phones');
      setPhones(response.data);
      setIsLoading(false);
    };
    fetchPhones();
  }, []);

  const handleSelectPhone = (phone) => {
    setSelectedPhone(phone);
  };

  return (
    <div className="phone-list">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {phones.map((phone) => (
              <li key={phone.id} onClick={() => handleSelectPhone(phone)}>
                
                <img src={phone.imageFileName} alt={phone.name} />
                <p>{phone.name}</p>
              </li>
            ))}
          </ul>
          {selectedPhone && (
            <div className="phone-details">
              <h2>{selectedPhone.name}</h2>
              <p>{selectedPhone.manufacturer}</p>
              <p>{selectedPhone.description}</p>
              <p>{selectedPhone.color}</p>
              <p>{selectedPhone.price}</p>
              <img src={selectedPhone.imageFileName} alt={selectedPhone.name} />
              <p>{selectedPhone.screen}</p>
              <p>{selectedPhone.processor}</p>
              <p>{selectedPhone.ram}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhoneList;