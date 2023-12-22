import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/phones");
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePhoneClick = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/phones/${id}`);
      setSelectedPhone(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching phone details:", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ marginRight: "100px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Phone List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {phones.map((phone) => (
              <li
                key={phone.id}
                onClick={() => handlePhoneClick(phone.id)}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                  marginBottom: "10px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0 }}>
                      {phone.manufacturer} {phone.name}
                    </h3>
                    <p style={{ color: "#555", margin: "5px 0" }}>
                      <strong>Color:</strong> {phone.color}
                    </p>
                  </div>
                  <div>
                    <img
                      src={`/images/${phone.imageFileName}`}
                      alt={`${phone.manufacturer} ${phone.name}`}
                      style={{
                        marginLeft: "20px",
                        width: "60px",
                        height: "60px",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedPhone && (
        <div>
          <h2>Phone Details</h2>
          {loading ? (
            <p>Loading details...</p>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "20px", textAlign: "left" }}>
                <h3
                  style={{ textTransform: "uppercase", fontSize: "20px" }}
                  strong
                >
                  {selectedPhone.manufacturer} {selectedPhone.name}
                </h3>
                <p>
                  <strong>Color:</strong> {selectedPhone.color}
                </p>
                <p>
                  <strong>Price:</strong> ${selectedPhone.price}
                </p>
                <p style={{ maxWidth: "300px" }}>
                  <strong>Description:</strong> {selectedPhone.description}
                </p>
              </div>
              <div style={{ backgroundColor: "#242424" }}>
                <img
                  src={`/images/${selectedPhone.imageFileName}`}
                  alt={`${selectedPhone.manufacturer} ${selectedPhone.name}`}
                  style={{ marginLeft: "20px", width: "auto", height: "300px" }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
