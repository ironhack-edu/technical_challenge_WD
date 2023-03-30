import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {PhoneCard} from "../../components/index";

export const PhonesPage = ({phones}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Phones</h1>
                    <PhoneCard phones={phones} />
                </Col>
            </Row>
        </Container>
    );
};