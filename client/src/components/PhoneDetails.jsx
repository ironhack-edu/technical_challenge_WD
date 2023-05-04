import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

function PhoneDetails() {
  const [phone, setPhone] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchPhone() {
      try {
        const response = await axios.get(`http://localhost:5005/phones/${id}`);
        setPhone(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPhone();
  }, [id]);

  return (
    <div className="d-flex justify-content-center mt-5">
      {phone && (
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" style={{ width: "20rem" }} src={`../images/${phone.imageFileName}`} />
          <Card.Body>
            <Card.Title>{phone.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {phone.manufacturer}
            </Card.Subtitle>
            <Card.Text>
              <strong>Price:</strong> {phone.price}€
            </Card.Text>
            <Card.Text>{phone.description}</Card.Text>
            <Card.Text>
              <h4>Specs</h4>
              <p>
                <strong>Color:</strong> {phone.color}
              </p>
              <p>
                <strong>Screen:</strong> {phone.screen}
              </p>
              <p>
                <strong>Processor:</strong> {phone.processor}
              </p>
              <p>
                <strong>RAM:</strong> {phone.ram}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default PhoneDetails;
