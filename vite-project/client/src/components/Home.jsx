// components/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get("http://localhost:3001/");
        setPhones(response.data);
      } catch (error) {
        console.error("Error fetching phones:", error);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div>
      <h1>Phone List</h1>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <h2>{phone.name}</h2>
            <img
              src={`http://localhost:3001/assets/images/${phone.imageFileName}`}
              alt={phone.name}
              width="100"
            />
            <p>{phone.description}</p>
            <p>Manufacturer: {phone.manufacturer}</p>
            <p>Color: {phone.color}</p>
            <p>Price: ${phone.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
