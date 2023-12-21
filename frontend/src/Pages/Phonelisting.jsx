import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const API_URL = import.meta.env.VITE_SERVER_URL;

function Phonelisting() {
  const [phones, setPhones] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(phones);
  useEffect(() => {
    setTimeout(() => {
      const getPhones = async () => {
        try {
          const apiPhones = await axios.get(`${API_URL}/api/phones`);
          setPhones(apiPhones.data);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      getPhones();
    }, 1000);
  }, []);
  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <div className="flex-container">
        {phones &&
          phones.map((e, id) => (
            <div className="card1" key={id}>
              <img
                className="card1-img"
                src={`../../public/images/${e.imageFileName}`}
                alt={e.name}
              />
              <p>Brand : {e.manufacturer}</p>
              <p>{e.description}</p>
              <p>Ram : {e.ram}gb</p>
              <Link to={"/phones/" + e.id}>{e.name}</Link>
              <p> Price : {e.price}$</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Phonelisting;
