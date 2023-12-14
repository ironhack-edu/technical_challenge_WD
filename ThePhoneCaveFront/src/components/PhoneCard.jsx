import { Button, Card, Col, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import './PhoneCard.css'

const PhoneCard = ({ phone }) => {
    return (
        <Col md={6} lg={4}>
            <Card className="phone-card m-1">
                <Card.Img variant="top" src={`/src/assets/images/${ phone.imageFileName }`} />
                <Card.Body>
                    <Card.Title>{ phone.name }</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ phone.manufacturer }</Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Color: { phone.color }</ListGroup.Item>
                        <ListGroup.Item>Price: { phone.price } $</ListGroup.Item>
                        <ListGroup.Item>Screen: { phone.screen }</ListGroup.Item>
                        <ListGroup.Item>Processor: { phone.processor }</ListGroup.Item>
                        <ListGroup.Item>Ram: { phone.ram }</ListGroup.Item>
                    </ListGroup>
                    <Link to={`/phones/${phone.id}`}>
                        <Button variant="dark">View Details</Button>
                    </Link>                
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhoneCard