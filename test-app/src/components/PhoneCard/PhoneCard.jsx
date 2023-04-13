import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './PhoneCard.css'

const PhoneCard = ({ name, _id, manufacturer, description, color, price, screen, processor, ram }) => {
    return (
        <Link to={`/phones/${_id}`}>
            <Card className='mb-3 PhoneCard'>
                <Card.Img variant="top" src='https://static.vecteezy.com/system/resources/thumbnails/011/047/520/small/smartphone-and-mobile-phone-free-png.png' />
                <Card.Body>
                    <Card.Text>{name}</Card.Text>
                    <Card.Text>{manufacturer}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{color}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{screen}</Card.Text>
                    <Card.Text>{processor}</Card.Text>
                    <Card.Text>{ram}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PhoneCard