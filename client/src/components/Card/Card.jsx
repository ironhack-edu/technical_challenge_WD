import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
function PhoneCard({ phone }) {
  const { name, price, _id, imageFileName } = phone

  return (
    <Card >
      <Card.Img variant="top" src={`../../../images/${imageFileName}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} €</Card.Text>
        <Link to={`/details/${_id}`} style={{ marginInline: "auto" }}>
          <Button variant="dark" as="div">Details  </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default PhoneCard 
