import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PhoneDetails = () => {
  const [phone, setPhone] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { phoneId } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  console.log(phoneId);
  const fetchPhoneDetails = () => {
    fetch(`${API_URL}/api/phones/${phoneId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPhone(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPhoneDetails();
  }, []);

  return (
    <>
      <div>
        <h1>Phone Details</h1>
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          <div>
            <h2>{phone.name}</h2>
            <img
              src={`/${phone.imageFileName}`}
              className="phone-image"
              alt={`Image of ${phone.name}`}
            />
            <p>{phone.description}</p>
            <p>Manufacturer: {phone.manufacturer}</p>
            <p>Screen: {phone.screen}</p>
            <p>Processor: {phone.processor}</p>
            <p>Ram: {phone.ram} GB</p>
            <p>Price € {phone.price}</p>
            <button onClick={() => window.history.back()}>Back</button>
          </div>
        )}
      </div>
    </>
  );
};

export default PhoneDetails;
