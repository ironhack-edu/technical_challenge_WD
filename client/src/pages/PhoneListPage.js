import axios from "axios";
import { useEffect, useState } from "react";
import PhoneCardComponent from "../components/PhoneCardComponent";

const API_URL = process.env.REACT_APP_API_URL;

function PhoneListPage() {
  const [phones, setPhones] = useState(null);

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
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {!phones ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <h1>List of Phones</h1>
          {phones.map((phone) => (
            <PhoneCardComponent key={phone.id} {...phone} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PhoneListPage;
