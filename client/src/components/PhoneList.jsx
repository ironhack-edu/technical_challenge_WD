
import React, { useEffect, useState } from "react";
import axios from "axios";
import PhoneCard from "./PhoneCard";
import { ClipLoader } from "react-spinners";

export default function ListPhones() {
  const [phones, setPhones] = useState(null);
  const API_URL = "http://localhost:5005/phones/";

  const getPhones = async () => {
    try {
      const response = await axios.get(API_URL);
      setPhones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhones();
  }, []);
  console.log(phones);
  return (
    <div id="phoneList">
      {phones ? (
        phones.map((phone) => {
          return <PhoneCard key={phone.id} phone={phone} />;
        })
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
  );
}
