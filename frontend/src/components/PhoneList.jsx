import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px"}}>
      <div >
      <h1 >Welcome to PhoneCave!</h1>
      <h2 >Phone List</h2>
    </div>
      <div style={{display: "grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"20px"}}>
        {phones.map(phone => (
          <Link to={`/phones/${phone.id}`} key={phone.id} >
            <div >
              <img src={`/images/${phone.imageFileName}`} alt={phone.name} style={{maxWidth: "100%", marginBottom: "10px"}} />
              <div >
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