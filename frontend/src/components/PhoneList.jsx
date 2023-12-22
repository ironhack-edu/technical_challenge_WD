import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneList = ({ onSelectPhone }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get('http://localhost:3000/phones');
        setPhones(response.data);
      } catch (error) {
        console.error('Error fetching phones:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Phone List</h2>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id} onClick={() => onSelectPhone(phone)}>
            {phone.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
