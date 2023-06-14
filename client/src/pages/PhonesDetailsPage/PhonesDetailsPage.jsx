import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import phonesService from "../../services/phones.services"
import { Row, Col, Container, Button } from "react-bootstrap"




const PhonesDetailsPage = () => {

    const { id } = useParams()

    const [phone, setPhone] = useState()

    useEffect(() => {
        loadPhone()
    }, [])

    const loadPhone = () => {
        phonesService
            .getOnePhone(id)
            .then(({ data }) => setPhone(data))
            .catch(err => console.log(err))
    }

    return (

        <Container>
            {
                !phone
                    ?
                    <p>Cargando...</p>
                    :
                    <>
                        <h1>{phone.name} Details</h1>
                        <hr />

                        <Row>

                            <Col md={{ span: 6 }}>
                                <h3>Specs</h3>
                                <p>Manufactured by: {phone.manufacturer}</p>
                                <ul>
                                    <li>Color: {phone.color}</li>
                                    <li>Price: {phone.price} $</li>
                                    <li>Screen: {phone.screen} $</li>
                                    <li>Processor: {phone.processor} $</li>
                                    <li>Ram: {phone.ram} $</li>

                                </ul>
                                <hr />

                                <Link to="/phones">
                                    <Button variant="dark">Go back to list</Button>
                                </Link>

                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={phone.imageFileName} style={{ width: '100%' }} />
                            </Col>

                        </Row>
                    </>
            }

        </Container>
    )
}

export default PhonesDetailsPage