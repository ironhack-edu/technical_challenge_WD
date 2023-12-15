
import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const PhoneDetails = ({ phone }) => {
    return (

        <Col md={6} lg={4}>

            <Card className="phone-card m-1">
                <Card.Img variant="top" src={`/src/assets/${phone.imageFileName}`} />
                <Card.Body>
                    <Card.Title>{phone.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{phone.manufacturer}</Card.Subtitle>

                    <Link to={`/phones/${phone.id}`}>
                        <Button>Details</Button>
                    </Link>
                </Card.Body>
            </Card>

        </Col>
    )


}
export default PhoneDetails
