import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";

function PhonePage({ phone }) {
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <Link to={`/phones`}>
        <button className="back-button">View All Phones</button>
      </Link>
      <hr></hr>
      {phoneDetails ? (
        <div className="phone-details">
          <h2>{phoneDetails.name} Details</h2>
          <img src="phoneDetails.imageFileName" />
          <p>
            <strong>Manufacturer: </strong>
            {phoneDetails.manufacturer}
          </p>

          <p>
            <strong>Description: </strong>
            {phoneDetails.description}
          </p>
          <p>
            <strong>Color: </strong>
            {phoneDetails.color}
          </p>
          <p>
            <strong>Screen: </strong>
            {phoneDetails.screen}
          </p>
          <p>
            <strong>Processor: </strong>
            {phoneDetails.processor}
          </p>
          <p>
            <strong>Price: </strong>
            {phoneDetails.price} $
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PhonePage;
