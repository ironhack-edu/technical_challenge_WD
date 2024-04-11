import React from 'react';
import  { useState, useEffect } from 'react'
import PhoneCard from '../components/ProductCard';
import axios from "axios"


const API_URL = import.meta.env.VITE_API_URL;

const HomePage = () => {
    const [phones, setPhones] = useState([]);

    

      const getAllPhones = () => {
        axios
          .get(`${API_URL}/phones`)
          .then((response) => {
            setPhones(response.data);
            console.log("Updated phones state:", phones);
          })
          .catch((error) => console.log("Error fetching phones:", error));
      };
      

    useEffect(() => {
        getAllPhones();
      }, []);

      return (
        <div className="flex flex-row flex-wrap m-16 ml-44">
          {phones.length > 0 ? (
            phones.map((phone, index) => (
              <PhoneCard
                key={phone._id}
                {...phone}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
      
}

export default HomePage