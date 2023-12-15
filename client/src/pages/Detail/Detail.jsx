import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Row, Col, Container, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"


const Detail = () => {

    const { id } = useParams()
    const [phone, setPhone] = useState({})

    useEffect(() => {
        axios.get('http://localhost:5005/phones/' + id)
            .then(res => setPhone(res.data))
            .catch(err => console.log(err))
    }, [])

    return (

        <Container>
            {
                phone ?

                    <Row>
                        <Col md={{ offset: 3, span: 6 }}>
                            <Card>
                                <Card.Img variant="top" src={'../../assets/images/' + phone.imageFileName} />
                                <Card.Body>
                                    <Card.Title>{phone.name}</Card.Title>
                                    <Card.Text>
                                        <h2>Marca: {phone.manufacturer}</h2>
                                        <h3>Coste: {phone.price}</h3>
                                        <h4>Color: {phone.color}</h4>
                                        <h4>Tamaño de la pantalla: {phone.screen}</h4>
                                        <h4>Procesador: {phone.processor}</h4>
                                        <h4>Ram: {phone.ram}</h4>
                                        <p>{phone.description}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Link to='/'>
                                <Button>Volver a todos</Button>
                            </Link>
                        </Col>
                    </Row>
                    :
                    <h1>Cargando</h1>
            }
        </Container>
    )

}

export default Detail