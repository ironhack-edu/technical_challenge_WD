import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPhones = async () => {
      setLoading(true);
      try {
        setTimeout(async () => {
          const response = await axios.get("/phones");
          setPhones(response.data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching phones", error);
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <>
          <ul className="phone-list">
            {phones.map((phone) => (
              <li className="phone-item" key={phone.id}>
                <img
                  className="phone-thumbnail"
                  src={`http://localhost:5005/images/${phone.imageFileName}`}
                  alt={phone.name}
                />
                <div className="phone-info">
                  <span className="phone-brand">{phone.manufacturer}</span>
                  <span className="phone-model">{phone.name}</span>
                  <span className="phone-price">{phone.price}$</span>
                </div>
                <button
                  className="details-button"
                  onClick={() => setSelectedPhone(phone)}
                >
                  Details
                </button>
              </li>
            ))}
          </ul>
          <div className="container-details">
            {selectedPhone && (
              <div className="phone-card">
                <div className="phone-card-header">
                  <img
                    className="phone-card-image"
                    src={`http://localhost:5005/images/${selectedPhone.imageFileName}`}
                    alt={selectedPhone.name}
                  />
                </div>
                <div className="phone-card-body">
                  <h2 className="phone-card-title">{selectedPhone.name}</h2>
                  <h3 className="phone-card-subtitle">
                    {selectedPhone.manufacturer}
                  </h3>
                  <p className="phone-card-description">
                    {selectedPhone.description}
                  </p>
                  <ul className="phone-card-specs">
                    <li>Processor: {selectedPhone.processor}</li>
                    <li>Ram: {selectedPhone.ram}GB</li>
                    <li>Price: {selectedPhone.price}€</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
