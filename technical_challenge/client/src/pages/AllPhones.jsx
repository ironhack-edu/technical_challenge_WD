import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AllPhones() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get("http://localhost:5005/api/phones");
        setPhones(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhones();
  }, []);

  const handlePhoneClick = (phone) => {
    console.log("PhoneDetails ", selectedPhone);

    setSelectedPhone(phone);
  };

  return (
    <div>
      <h1>Phone Catalog</h1>
      <div className="phone-list">
        {phones.map((phone) => (
          <Link key={phone.id} to={`/phones/${phone.id}`}>
            <div className="phone-card">
              <p>{phone.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllPhones;
