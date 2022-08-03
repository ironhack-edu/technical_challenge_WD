import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import phonesServices from "../../services/phone.services"

const PhonesDetails = () => {

    const [phones, setPhones ] = useState([])
    
    const {phone_id} = useParams()

    useEffect (() => {

        phonesServices
            .getOnePhone(phone_id)
            .then(({data}) => setPhones(data))
            .catch(err => console.error(err))
    }, [])


    return (
            <Container>

                <h1>Details {phones.name}</h1>
                <hr />

                <Row>
                    <Col md={{ span:4, offset: 1}}>
                        <p>Description: {phones.description}</p>
                        <p>Manufacture: {phones.manufacturer}</p>
                        <p>Price: {phones.price}</p>
                        <p>Screen: {phones.screen}</p>
                        <p>Processor: {phones.processor}</p>
                        <p>Ram: {phones.ram}</p>

                    </Col>
                </Row>
                
            </Container>
    )
}

export default PhonesDetails