import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner'; // Import the Spinner component
import './PhoneList.css';

const PhoneList = ({ onSelectPhone }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/phones');
        setPhones(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <Spinner />} 
      <div className="phone-list-container">
        {!loading ? (
          phones.map((phone) => (
            <div className="phone-card" key={phone.id} onClick={() => onSelectPhone(phone)}>
              <img className="phone-image" src={`../../../assets/images/${phone.imageFileName}`} alt={phone.name} />
              <h3>{phone.name}</h3>
              <p>Price: ${phone.price}</p>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default PhoneList;