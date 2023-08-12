import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PhoneDetails() {
  const [phoneDetails, setPhoneDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await axios.get(`/api/phones/${id}`);
        setPhoneDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhoneDetails();
  }, [id]);

  if (!phoneDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{phoneDetails.name}</h2>
      <img
        src={`/assets/images/${phoneDetails.imageFileName}`}
        alt={phoneDetails.name}
      />
      <p>Manufacturer: {phoneDetails.manufacturer}</p>
      <p>Color: {phoneDetails.color}</p>
      <p>Price: ${phoneDetails.price}</p>
      <p>Screen: {phoneDetails.screen}</p>
      <p>Processor: {phoneDetails.processor}</p>
      <p>RAM: {phoneDetails.ram} GB</p>
    </div>
  );
}

export default PhoneDetails;
