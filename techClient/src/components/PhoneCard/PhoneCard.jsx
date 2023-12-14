import { Row, Card, Col, Button, Container } from "react-bootstrap"
import PhoneDetails from '../PhoneDetails/PhoneDetails'
import { useState } from "react"


const PhoneCard = ({ name, imageFileName, id, price }) => {
    const imgUrl = `src/assets/images/${imageFileName}`
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(!showDetails);
    }


    return (
        <>
            {!showDetails ?
                <Col md={3} className="d-inline-flex align-items-center">
                    <Card className="w-100">
                        <Card.Img variant="top" style={{ maxHeight: '500px', maxWidth: '300px' }} src={imgUrl} />
                        <Card.Body className="userCard text-center">
                            <h1 className="textColor">{name}</h1>
                            <Card.Text>{price}$</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">
                                <button className="btn btn-outline-success mr-2" onClick={handleClick}>Details</button>
                            </Card.Subtitle>

                        </Card.Body>
                    </Card>
                </Col>

                : <Col md={3} className="d-inline-flex align-items-center">
                    <PhoneDetails id={id} />

                </Col>}

        </>
    )
}
export default PhoneCard