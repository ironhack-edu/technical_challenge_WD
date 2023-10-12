import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import PhoneCard from "./PhoneCard.jsx";

export default function PhonesList() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllPhones = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/phones`)
      .then((response) => {
        setPhones(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="flex flex-wrap">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        phones.map((phone) => (
          <div key={phone.id} className="w-1/4 p-4" style={{ height: "400px" }}>
            <PhoneCard
              id={phone.id}
              name={phone.name}
              manufacturer={phone.manufacturer}
              imageFileName={phone.imageFileName}
              price={phone.price}
              description={phone.description}
              color={phone.color}
              screen={phone.screen}
              processor={phone.processor}
              ram={phone.ram}
          
            />
          </div>
        ))
      )}
    </div>
  );
}

