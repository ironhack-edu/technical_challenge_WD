import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import './PhonePage.css'

function PhonePage() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/api/phones")
      .then((response) => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handlePhoneClick = (phone) => {
    setSelectedPhone(phone);
  };

  return (
    <div>
      {loading ? (
        <p>
          <Loading> </Loading>
        </p>
      ) : (
        <>
          <div>
            {phones.map((phone) => (
              <div className="phone-list" key={phone.id} onClick={() => handlePhoneClick(phone)}>
                {phone.name}
              </div>
            ))}
          </div>

          {selectedPhone && (
            <div className="phone-details">
              <h2>{selectedPhone.name}</h2>
              <p>manufacturer: {selectedPhone.manufacturer}</p>
              <p>description: {selectedPhone.description}</p>
              <p>color: {selectedPhone.color}</p>
              <p>price: {selectedPhone.price}</p>
              <p>{selectedPhone.imageFileName}</p>
              <p>screen: {selectedPhone.screen}</p>
              <p>processor: {selectedPhone.processor}</p>
              <p>RAM: {selectedPhone.ram}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PhonePage;
