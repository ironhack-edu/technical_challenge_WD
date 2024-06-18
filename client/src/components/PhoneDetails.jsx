import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import defaultImage from "../assets/images/Honor_10.png";

const PhoneDetails = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/phones/${id}`);
        setPhone(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching phone details:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <ScaleLoader color={"#123abc"} loading={loading} size={150} />;
  }

  return (
    <div>
      {phone ? (
        <div>
          <h2>Détails du Téléphone</h2>
          {phone.imageFileName ? (
            <img
              src={defaultImage}
              alt={phone.name}
              style={{ maxWidth: "200px" }}
            />
          ) : (
            <p>Image par défaut</p>
          )}
          <p>Nom : {phone.name}</p>
          <p>Prix : {phone.price} $</p>
        </div>
      ) : (
        <p>Le téléphone n'a pas pu être trouvé.</p>
      )}
    </div>
  );
};

export default PhoneDetails;
