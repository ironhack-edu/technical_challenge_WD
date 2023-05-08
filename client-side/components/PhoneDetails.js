import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const PhoneDetails = ({ id }) => {
  const [phone, setPhone] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPhone = async () => {
      setIsLoading(true);
      const response = await axios.get(`/phones/${id}`);
      setPhone(response.data);
      setIsLoading(false);
    };
    fetchPhone();
  }, [id]);

  return (
    <div className="phone-details">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2>{phone.name}</h2>
          <div className="phone-image">
            <img src={`/images/${phone.imageFileName}`} alt={phone.name} />
          </div>
          <div className="phone-details-text">
            <p>
              <strong>Manufacturer:</strong> {phone.manufacturer}
            </p>
            <p>
              <strong>Description:</strong> {phone.description}
            </p>
            <p>
              <strong>Color:</strong> {phone.color}
            </p>
            <p>
              <strong>Price:</strong> {phone.price}€
            </p>
            <p>
              <strong>Screen:</strong> {phone.screen}
            </p>
            <p>
              <strong>Processor:</strong> {phone.processor}
            </p>
            <p>
              <strong>RAM:</strong> {phone.ram}GB
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PhoneDetails;

