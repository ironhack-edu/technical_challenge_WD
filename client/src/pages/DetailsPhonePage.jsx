
import { useEffect, useState } from "react"
import phonesServices from "../services/phones.services"
import { useParams } from "react-router-dom"
import { Row, Col, ListGroup, Container, Image } from "react-bootstrap"

const DetailsPhonePage = () => {

    const { id } = useParams

    const [phone, setPhone] = useState()

    useEffect(() => {

        phonesServices
            .getOnePhone(id)
            .then(({ data }) => setPhone(data))
            .catch(err => console.log(err))
    }, [])

    return (
        phone ?
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <Row>
                            <Image className='detail-image' src={`/src/assets/${phone.imageFileName}`} />
                        </Row>
                    </Col>
                    <Col>
                        <h1>{phone.name}</h1>
                        <h5>{phone.manufacturer}</h5>
                        <p>{phone.description}</p>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Color: {phone.color}</ListGroup.Item>
                            <ListGroup.Item>Price: {phone.price} $</ListGroup.Item>
                            <ListGroup.Item>Screen: {phone.screen}</ListGroup.Item>
                            <ListGroup.Item>Processor: {phone.processor}</ListGroup.Item>
                            <ListGroup.Item>Ram: {phone.ram}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            :
            <h1>Loading...</h1>
    )



}
export default DetailsPhonePage