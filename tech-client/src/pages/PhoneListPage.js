import axios from "axios";
import { useEffect, useState } from "react";
import PhoneCard from "../components/PhoneCard";
const API_URL = process.env.REACT_APP_SERVER_URL

function PhoneListPage() {
    
  const [phones, setPhones] = useState([]);

  const getPhonesList = () => {
    axios
      .get(`${API_URL}/api/phones`)
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) =>
        console.log("Error getting list of phones from API", error)
      );
  };

  useEffect(() => {
    getPhonesList();
  }, []);

  return (
    <div>
      {!phones ? (
        <p>No phones available</p>
      ) : (
        <div className="container">
          <h1>List of Phones</h1>
          {phones.map((phone) => (
            <PhoneCard key={phone.id} {...phone} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PhoneListPage;
