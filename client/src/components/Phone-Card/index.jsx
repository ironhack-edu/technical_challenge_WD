import React from "react";
import {Button,Container,Row,Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function PhoneCard({phones}) {
    return (
        <div>
            <Row xs={2} md={4} className="g-4" style={{justifyContent:"center"}}>
                {phones && Array.isArray(phones) && phones.length > 0 && phones.map((phone)=> 
                    <Col>
                        <Card style={{ width: "18rem", justifyContent:"center", textAlign:"center"}} key={phone.id} >
                            <Card.Img variant="top" src={`../images/${phone.imageFileName}`} style={{width: '200px'}} className="mx-auto"/>
                            <Card.Body style={{ height: "100%" }}>
                                <Card.Title>{phone.name}</Card.Title>
                                <Card.Title>{phone.manufacturer}</Card.Title>
                                <Card.Text>
                                    Price:{phone.price}$
                                </Card.Text>
                                <Link to={`/${phone.id}`}>
                                    <Button variant="primary">See details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
                {!phones && <p>No phones found.</p>}
                {phones && Array.isArray(phones) && phones.length === 0 && <p>No phones found.</p>}
            </Row>
        </div>
    );
}


export default PhoneCard;
