import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

function PhoneDetailsPage({ phones }) {

    const [phoneDetails, setPhoneDetails] = useState({});
    const [loadingDetails, setLoadingDetails] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      getDetails();
    }, [id]);

    const getDetails = () => {
      setLoadingDetails(true);

      const phoneDetailed = phones.find(
        (eachPhone) => eachPhone.id === Number(id)
      );

      setTimeout(() => {
        setPhoneDetails(phoneDetailed);
        setLoadingDetails(false);
      }, 1000);
    };

    const {
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName,
        screen,
        processor,
        ram,
      } = phoneDetails;

  return loadingDetails ? (
    <Spinner />
  ) : (
    <div>
      <h1>Details</h1>
      <Card style={{ width: "18rem", marginBottom: "5rem" }}>
        <Card.Img variant="top" src={`../../src/assets/images/${imageFileName}`} />
        <Card.Body>
          <Card.Title>{name} by {manufacturer}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            Color: {color}
          </Card.Text>
          <Card.Text>
            Screen: {screen}
          </Card.Text>
          <Card.Text>
            Processor: {processor}
          </Card.Text>
          <Card.Text>
            RAM: {ram}
          </Card.Text>
          <Card.Text>
            Price: {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PhoneDetailsPage;
