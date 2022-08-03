import { Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PhonesCard = ({imageFileName,name, description, _id }) => {

    return (
        <Card className="PhonesCard">
                <Card.Img variant="top" src={imageFileName} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <div className='d-grid'>
                                <Link to={`/phones/${_id}`}>
                                    <Button variant="dark" size="sm" as="div">More Details</Button>
                                </Link>
                                </div>
                        </Card.Body>
        </Card>
    )
}

export default PhonesCard