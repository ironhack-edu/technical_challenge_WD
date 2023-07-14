import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export const PhoneCard = (phone) => {
  return (
    <div className="PhoneCard">
      <Card>
        <Card.Header>
          {phone.manufacturer} {phone.name}
        </Card.Header>
        <Card.Body>
          <Card.Title>{phone.color}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
