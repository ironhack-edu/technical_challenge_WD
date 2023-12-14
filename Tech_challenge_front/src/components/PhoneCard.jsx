import { Button, Card } from 'react-bootstrap'
import { useState } from 'react'
import "./PhoneCard.css"


const PhoneCard = ({
    id,
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram
}) => {

    const [details, setDetails] = useState(false)

    const image = `src/assets/images/${imageFileName}`


    const detailsHandler = () => {
        setDetails(!details)
    }

    return (
        <div className='my-card'>
            {
                !details ?
                    <Card style={{ minHeight: '37rem' }}>
                        <Card.Img className="my-card-image" variant="top" src={image} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center', fontSize: '2.5em' }}>{name}</Card.Title>
                            <Card.Text style={{ textAlign: 'center', fontSize: '1.5em' }}>{manufacturer}</Card.Text>
                        </Card.Body>
                    </Card>
                    :
                    <Card style={{ minHeight: '37rem' }}>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text><b>description: </b> {description}</Card.Text>
                            <Card.Text><b>color: </b>{color}</Card.Text>
                            <Card.Text><b>price: </b>{price}</Card.Text>
                            <Card.Text><b>screen: </b>{screen}</Card.Text>
                            <Card.Text><b>processor: </b>{processor}</Card.Text>
                            <Card.Text><b>RAM: </b>{ram}</Card.Text>

                        </Card.Body>
                    </Card>
            }
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <Button variant="dark" onClick={detailsHandler}>{details ? "Hide details" : "See details"}</Button>
            </div>
        </div >
    )
}

export default PhoneCard