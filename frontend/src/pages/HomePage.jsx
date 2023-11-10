import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [phones, setPhones] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchPhones = () => {
    fetch(`${API_URL}/api/phones`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setPhones(data);
          setIsLoading(false);
        }, 1200);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <>
      <div>
        <h1>List of available phones</h1>
        {isLoading ? (
          <span class="loader"></span>
        ) : (
          <div className="phoneContainer">
            {phones.map((phone) => (
              <div key={phone._id}>
                <Link to={`/phone/${phone._id}`}>
                  <img
                    src={`/${phone.imageFileName}`}
                    className="phone-image"
                    alt={`Image of ${phone.name}`}
                  />
                  <p>{`${phone.name}`}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
