import { useEffect, useState } from "react"
import axios from 'axios'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AllPhones = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5005/phones')
            .then(res => setPhones(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Row>
                {
                    phones ?
                        phones.map(elm => {
                            return (
                                <Col key={elm.id} md={4}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={`../../assets/images/${elm.imageFileName}`} />
                                        <Card.Body>
                                            <Card.Title>{elm.name}</Card.Title>
                                            <Card.Text>
                                                {elm.description}
                                            </Card.Text>
                                            <Link to={'/phone/' + elm.id}>
                                                <Button variant="primary">See Details</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                        :
                        <h1>Cargando...</h1>
                }
            </Row>
        </Container>
    )

}

export default AllPhones