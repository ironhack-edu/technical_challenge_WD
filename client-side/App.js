import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneList from "./components/PhoneList";
import PhoneDetails from "./components/PhoneDetails";
import Spinner from "./components/Spinner";

const App = () => {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPhones = async () => {
      setIsLoading(true);
      const response = await axios.get("/phones");
      setPhones(response.data);
      setIsLoading(false);
    };
    fetchPhones();
  }, []);

  const handlePhoneClick = (id) => {
    setSelectedPhone(id);
  };

  return (
    <div className="container">
      <h1>Phone Catalog</h1>
      {isLoading ? (
        <Spinner />
      ) : selectedPhone ? (
        <PhoneDetails id={selectedPhone} />
      ) : (
        <PhoneList phones={phones} onPhoneClick={handlePhoneClick} />
      )}
    </div>
  );
};

export default App;
