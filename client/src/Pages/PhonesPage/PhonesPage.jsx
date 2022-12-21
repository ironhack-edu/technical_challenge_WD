import { Container, Row, Col } from "react-bootstrap";
import PhoneDetailedCard from "../../components/PhoneDetailedCard/PhoneDetailedCard";
import PhoneList from "../../components/PhoneList/PhoneList";
import phoneService from "../../services/phones.service";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const PhonesPage = () => {

    const [phones, setPhones] = useState([])

    const loadPhoneList = () => {
        phoneService
            .getPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadPhoneList()
    }, [])




    return (
        <>
            <Container>
                <Row>
                    <Col md={5}>
                        <PhoneList phones={phones} />
                    </Col>
                    <Col md={5}>
                        <PhoneDetailedCard />
                    </Col>
                </Row>
            </Container>
        </>
    )

};


export default PhonesPage;