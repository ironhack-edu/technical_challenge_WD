import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const PhoneCard = ({ name, id }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={`/${id}`}>
                    <Card.Link>Show Details</Card.Link>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default PhoneCard