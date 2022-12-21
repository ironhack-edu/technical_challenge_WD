import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"
import PhoneService from "../../services/phone.service"

function PhoneDetails() {
  const [phoneDetails, setPhoneDetails] = useState()

  const { phone_id } = useParams()

  const getPhoneDetails = () => {
    PhoneService
      .getOnePhone(phone_id)
      .then(res => {
        setPhoneDetails(res.data)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getPhoneDetails()
  }, [])


  return (
    <>
      {!phoneDetails ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        :
        <Container className="py-5">
          <Row className="pb-3">
            <Col md={{ span: 8, offset: 2 }}>
              <h1>{phoneDetails.name}</h1>
              <hr />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }} className="pb-3">
              <div className="d-flex justify-content-center">
                <img className="detailsImg" src={`../../../images/${phoneDetails.imageFileName}`} alt={phoneDetails.name} />
              </div>
              Description:
              <p>{phoneDetails.description}</p>
              <p>Manufacture: {phoneDetails.manufacturer}</p>
              <p>Price: {phoneDetails.price}€</p>
              <p>Screen: {phoneDetails.screen}</p>
              <p>Processor: {phoneDetails.processor}</p>
              <p>Ram: {phoneDetails.ram}</p>
              <Link to={`/list`}>
                <Button variant="dark" size="sm" as="div">Back</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      }
    </>
  )
}

export default PhoneDetails
