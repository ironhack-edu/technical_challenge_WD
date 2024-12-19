import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneDetails from "./PhoneDetails.js";
import "../App.css";

interface Phone {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageFileName: string;
  screen: string;
  processor: string;
  ram: number;
}

const PhoneList: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);

  const fetchPhones = async () => {
    try {
      console.log("Fetching phones from backend...");
      const response = await axios.get("http://localhost:3000/phones");
      console.log("Fetched phones:", response.data);
      setPhones(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching phones:", error);
      setLoading(false);
    }
  };

  const handlePhoneClick = (phone: Phone) => {
    setSelectedPhone(phone);
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="phone-list">
      {phones.map((phone) => (
        <div
          key={phone.id}
          className="phone-item"
          onClick={() => handlePhoneClick(phone)}
        >
          <h2>{phone.name}</h2>
        </div>
      ))}
      <div className="phone-details">
        {selectedPhone && <PhoneDetails phone={selectedPhone} />}
      </div>
    </div>
  );
};

export default PhoneList;
