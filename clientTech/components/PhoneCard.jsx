import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../src/App.css'


const PhoneCard = ({ id, name, manufacturer, imageFileName }) => {

    const photo = `src/assets/images/${imageFileName}`

    return (
        <div className='card'>

            <Card.Img variant="top" src={photo} />
            <Card style={{ minHeight: '37rem' }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center', fontSize: '3em', color: 'pink' }}>{name}</Card.Title>
                    <Card.Text style={{ textAlign: 'center', fontSize: '2em' }}>{manufacturer}</Card.Text>
                </Card.Body>
            </Card >
            <Link to={`/${id}`}><Button>Details</Button></Link>
            <hr></hr>

        </div >
    )
}

export default PhoneCard