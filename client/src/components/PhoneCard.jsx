import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function PhoneCard({ phone }) {
    return (
        <Card key={phone.id} style={{ width: '16rem', textAlign: "center", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
            <Card.Img className="phone-card-img " variant="top" src={phone.imageFileName} />
            <Card.Body>
                <Card.Title>{phone.name}</Card.Title>
                <Card.Text>
                    Colour: {phone.color}
                </Card.Text>
                <Card.Text>
                    Screen size: {phone.screen}
                </Card.Text>
                <Card.Text>
                    Euro:{phone.price}
                </Card.Text>
                <Link to={`/phones/${phone.id}`}>
                    <Button variant="primary">View phone</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default PhoneCard;