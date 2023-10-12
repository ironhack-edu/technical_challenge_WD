import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';

function PhoneCard({ phone }) {
    return(
        <Card key={phone.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/assets/images/${phone.imageFileName}`} />
            <Card.Body>
                <Card.Title>{phone.name}</Card.Title>
                <Card.Text>{phone.description}</Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroupItem>Color: {phone.color}</ListGroupItem>
                <ListGroupItem>{phone.screen}</ListGroupItem>
                <ListGroupItem>Proc: {phone.processor}. Ram: {phone.ram}</ListGroupItem>
                <ListGroupItem>Starting from: {phone.price}€</ListGroupItem>
            </ListGroup>
     

    
            <Card.Body>
                <Link to="/phones">Go Back</Link>
            </Card.Body>
        </Card>
    )
}

export default PhoneCard;