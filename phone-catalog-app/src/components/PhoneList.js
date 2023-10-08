import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneList = ({ onSelect }) => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPhones = async () => {
        try {
          const response = await axios.get('http://localhost:3000/phones');
          setPhones(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPhones();
    }, []);
  
    return (
      <div>
        <h2>Phone List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {phones.map((phone) => (
              <li key={phone.id} onClick={() => onSelect(phone.id)}>
                {phone.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default PhoneList;