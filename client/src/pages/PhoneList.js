import { useState, useEffect } from "react";
import { PhoneCard } from "../components/PhoneCard";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

export const PhoneList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [phones, setPhones] = useState([]);
  const [phoneDetails, setPhoneDetails] = useState([]);
  const getAllPhones = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/phones`)
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getPhone = (id) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/phones/${id}`)
      .then((response) => {
        const phoneData = response.data;
        setPhoneDetails(phoneData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="PhoneList d-flex flex-column m-3">
      <h3 className="text-center mb-3">PHONES</h3>
      <Container>
        <Row>
          <Col>
            {phones.map((phone) => {
              return (
                <div key={phone._id}>
                  <PhoneCard {...phone} />
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleShow();
                      getPhone(phone._id);
                    }}
                  >
                    Details
                  </Button>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{phoneDetails.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Manufacturer: {phoneDetails.manufacturer}</li>
            <li>Description: {phoneDetails.description}</li>
            <li>Color: {phoneDetails.color}</li>
            <li>Price: {phoneDetails.price}</li>
            <li>Screen: {phoneDetails.screen}</li>
            <li>Processor: {phoneDetails.processor}</li>
            <li>Ram: {phoneDetails.ram}</li>
          </ul>
          <Image
            src={`../assets/images/${phoneDetails.imageFileName}`}
            alt="img_missing"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
