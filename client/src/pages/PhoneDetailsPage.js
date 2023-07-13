import axios from "axios";
import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


const API_URL = process.env.REACT_APP_API_URL;

function PhoneDetailsPage() {
  const [phoneDetails, setPhoneDetails] = useState(null);

  const { phoneId } = useParams();

  const getPhoneDetails = () => {
    axios
      .get(`${API_URL}/api/phones/${phoneId}`)
      .then((response) => {
        setPhoneDetails(response.data);
      })
      .catch((error) => console.log("Error getting details from API", error));
  };

  useEffect(() => {
    getPhoneDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {!phoneDetails ? (
        <p>Loading...</p>
      ) : (
        <div >
        <Card className="container" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`/images/${phoneDetails[0].imageFileName}`}
          />
          <Card.Body>
            <Card.Title>{phoneDetails[0].name}</Card.Title>
            <Card.Text>{phoneDetails[0].manufacturer}</Card.Text>
            <Card.Text>{phoneDetails[0].description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Color: {phoneDetails[0].color}</ListGroup.Item>
            <ListGroup.Item>Price: {phoneDetails[0].price}</ListGroup.Item>
            <ListGroup.Item>Screen: {phoneDetails[0].screen}</ListGroup.Item>
            <ListGroup.Item>
              Processor: {phoneDetails[0].processor}
            </ListGroup.Item>
            <ListGroup.Item>Ram: {phoneDetails[0].ram}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to={"/"} className="btn btn-secondary">Back to phones</Link>
          </Card.Body>
        </Card>
        </div>
      )}
    </div>
  );
}

export default PhoneDetailsPage;
