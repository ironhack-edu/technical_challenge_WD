import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./PhoneCard.css";



const PhoneCard = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  const imagePath = `/assets/images/${props.phone.imageFileName}`


  return (
    <div className="wrapper">
      <Card className="phone-card" style={{ width: "50rem", height: "70vh" }}>
        <Card.Img
          variant="top"
          src={imagePath}
          alt={props.phone.name}
          className="phone-image"
        />
        <Card.Body>
          <Card.Title>{props.phone.name}</Card.Title>
          <Card.Text>Price: {props.phone.price}$</Card.Text>
          <Button
            variant="outline-warning"
            onClick={() => setShowDetail(!showDetail)}
          >
            {showDetail ? "Hide Detail" : "Show Detail"}
          </Button>
          {showDetail && (
            <>
              <Card.Text>{props.phone.description}</Card.Text>
              <Card.Text>Color: {props.phone.color}</Card.Text>
              <Card.Text>Screen: {props.phone.screen}</Card.Text>
              <Card.Text>Processor: {props.phone.processor}</Card.Text>
              <Card.Text>RAM: {props.phone.ram}</Card.Text>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PhoneCard;