import axios from "axios";
import { useState, useEffect } from "react";

const DATA_URL = "http://localhost:5009/phones";
const imagePath = "../../public/images";

export default function AllPhonesPage() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  const showDetails = (phone) => {
    setSelectedPhone(phone);
  };

  const changeLoading = () => {
    setLoading(false);
  };

  setTimeout(() => {
    changeLoading();
  }, 1000);

  useEffect(() => {
    axios
      .get(`${DATA_URL}`)
      .then((resp) => {
        setPhones(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log("Error fetching the data", err);
      });
  }, []);

  return (
    <div className="AllPhones">
      <h1>Lisa's Phones</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        phones &&
        phones.map((phone) => (
          <div key={phone.id} onClick={() => showDetails(phone)}>
            <div className="PhoneListEntry">
              <h2>{phone.name}</h2>
            </div>
          </div>
        ))
      )}
      {selectedPhone && (
        <div className="PhoneDetails">
          <img
            src={`${imagePath}/${selectedPhone.imageFileName}`}
            alt={selectedPhone.name}
          />
          <h3>Details of {selectedPhone.name}</h3>
          <p>Manufacturer: {selectedPhone.manufacturer}</p>
          <p>Description: {selectedPhone.description}</p>
          <p>Color: {selectedPhone.color}</p>
          <p>Price: {selectedPhone.price}</p>
          <p>Screen: {selectedPhone.screen}</p>
          <p>Processor: {selectedPhone.processor}</p>
          <p>RAM: {selectedPhone.ram}</p>
        </div>
      )}
    </div>
  );
}
