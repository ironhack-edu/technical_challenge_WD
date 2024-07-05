import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function PhoneDetails() {
  const { id } = useParams();
  const [currentPhone, setCurrentPhone] = useState(null);
  const API_URL = "http://localhost:5005/phones";

  const getCurrentPhone = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      setCurrentPhone(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentPhone();
  }, []);

  return (
    <div id="detailsPage">
    <div id="phoneDetailsContainer">
      {currentPhone ? (
        <div id="phoneDetails">
          <h2>{currentPhone.manufacturer} {currentPhone.name}</h2>
        <img
          id="phoneImg"
          src={`http://localhost:5005/assets/images/${currentPhone.imageFileName}`}
          alt={currentPhone.name}
        />
          <p>${currentPhone.price}</p>
          <p>{currentPhone.description}</p>
          <Link to="/">
            <button id="btn">Back to List</button>
          </Link>
        </div>
      ) : (
        <div>
          <ClipLoader
            color="blue"
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1>Loading</h1>
        </div>
      )}
    </div>
    </div>
  );
}