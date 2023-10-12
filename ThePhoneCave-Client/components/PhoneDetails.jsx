import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

export default function PhoneDetails({
  id,
  name,
  manufacturer,
  description,
  color,
  price,
  imageFileName,
  screen,
  processor,
  ram,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <img src={`./images/${imageFileName}`} alt={name} />
          <h3>{name}</h3>
          <h3>{manufacturer}</h3>
          <h3>{description}</h3>
          <h3>{color}</h3>
          <p>{price}</p>
          <h3>{screen}</h3>
          <h3>{processor}</h3>
          <h3>{ram}gb</h3>
        </>
      )}
    </div>
  );
}