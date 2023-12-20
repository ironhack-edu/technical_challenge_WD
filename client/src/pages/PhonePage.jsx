// src/pages/PhonePage.jsx

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "http://localhost:3000";

export default function PhonePage({}) {
  const [phoneDetails, setPhoneDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getPhoneDetails = () => {
      axios
        .get(`${API_URL}/api/phones/${id}`)
        .then((response) => {
          setPhoneDetails(response.data);
        })
        .catch((error) => console.log(error));
    };

    getPhoneDetails();
  }, [id]);

  return (
    <div>
      {phoneDetails ? (
        <div>
          <h2>{phoneDetails.name} Details</h2>
          <hr />
          <img
            src={`${API_URL}/assets/images/${phoneDetails.imageFileName}`}
            alt={phoneDetails.name}
          />

          <p>
            Manufacturer:
            {phoneDetails.manufacturer}
          </p>

          <p>
            Description:
            {phoneDetails.description}
          </p>
          <p>
            Color:
            {phoneDetails.color}
          </p>
          <p>
            Screen:
            {phoneDetails.screen}
          </p>
          <p>
            Processor:
            {phoneDetails.processor}
          </p>
          <p>
            Price:
            {phoneDetails.price} $
          </p>

          <Link to={`/phones`}>
            <button className="button">View All Phones</button>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
