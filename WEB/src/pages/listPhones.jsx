import React, { useState, useEffect } from "react";
import "../App.css";
function ListPhones() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../public/data/phones.json");

        if (!response.ok) {
          throw new Error(`Error loading phones.json: ${response.status}`);
        }

        const phonesData = await response.json();
        setPhones(phonesData);
      } catch (error) {
        console.error("Error fetching phone data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleOptions = (phone) => {
    setSelectedPhone(selectedPhone === phone ? null : phone);
  };

  return (
    <div className="container text-center">
      <h1 
      className="mt-5 mb-5"
      style={{ fontSize: '80px'}}
      >
      ListPhones
      </h1>
      <div className="row">
        {phones.map((phone) => (
          <div key={phone.id} className="col-md-3 mb-3">
            <div 
             className={`card ${selectedPhone === phone ? 'expanded' : ''}`}
             style={{ 
                width: '18rem',
                boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)',
                 }}
             >
              <img
                src={`../../public/images/${phone.imageFileName}`}
                className="card-img-top"
                alt={phone.name}
                style={{ height: "350px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  onClick={() => toggleOptions(phone)}
                  style={{ cursor: "pointer", fontSize:"30px" }}
                >
                  {phone.name}
                </h5>
                {selectedPhone === phone && (
                  <div>
                    <p style={{fontWeight: "bold", color:"blue",marginTop:"20px"}}> {phone.manufacturer}</p>
                    <p style={{fontWeight: "bold"}}>{phone.description}</p>
                    <p style={{fontWeight: "bold", color:"green",marginTop:"20px"}}>Screen: {phone.screen}</p>
                    <p style={{fontWeight: "bold", color:"orange",marginTop:"20px"}}>Processor: {phone.processor}</p>
                    <p style={{fontWeight: "bold", color:"pink",marginTop:"20px"}}>RAM: {phone.ram}</p>
                    <p style={{color:"red", fontWeight: "bold"}}>Price: {phone.price}</p>                 
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListPhones;
