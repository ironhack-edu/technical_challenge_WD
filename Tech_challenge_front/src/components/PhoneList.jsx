import { useEffect, useState } from "react"
import phoneService from "../services/phone.services"
import PhoneCard from "./PhoneCard"
import { Col, Container, Row } from 'react-bootstrap'

const PhoneList = () => {

    const [phones, setPhones] = useState()

    useEffect(() => {
        loadPhones()
    }, [])

    function loadPhones() {
        phoneService
            .listAll()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }

    return (
        !phones ? <><p>loading</p></> :
            <Container fluid>
                <Row>
                    {
                        phones.map(elm => <Col key={elm.id} md={{ span: 3 }} ><PhoneCard {...elm} /></Col>)
                    }
                </Row>
            </Container>
    )

}

export default PhoneList