import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PhonesList.css";

function PhonesList() {
  const [loading, setLoading] = useState(false);

  const [phonesArr, setPhonesArr] = useState([]);

  const [showDetails, setShowDetails] = useState([]);

  const getPhonesData = () => {
    setLoading(true);
    axios
      .get(`http://localhost:5005/phones`)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        setPhonesArr(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPhonesData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {phonesArr.map((phone, index) => {
            return (
    
                 <li key={index} className="phone-details">
                <img
                  src={`../../assets/images/${phone.imageFileName}`}
                  alt=""
                />
                <h2>{phone.name} </h2>

                <p>{phone.description} </p>
                <p>{phone.manufacturer} </p>
                <p>Color: {phone.color} </p>
                <p>{phone.price}€ </p>
                <p>Ram: {phone.ram} </p>
                <p>Screen size: {phone.screen} </p>
              </li>
        
             
            );
          })}
        </ul>
      )}
    </>
  );
}

export default PhonesList;
