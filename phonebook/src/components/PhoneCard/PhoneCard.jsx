import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './PhoneCard.css'

const PhoneCard = ({ data }) => {

    return (
        <div className="PhoneCard">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={`/src/assets/images/${data.imageFileName}`} />
                <Card.Body>
                    <Card.Title>{data.name} - {data.manufacturer}</Card.Title>
                    <Card.Text>{data.color}</Card.Text>
                    <Card.Text>{data.price} €</Card.Text>
                    <Link to={`/phones/${data.id}`}><Button className='customButton'>See Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )

}

export default PhoneCard