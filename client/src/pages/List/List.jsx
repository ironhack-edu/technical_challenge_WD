import { useEffect, useState } from "react"
import PhoneService from "../../services/phone.service"
import { Container, Row, Col } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"
import PhoneCard from "../../components/Card/Card"

const List = () => {
  const [phones, setPhones] = useState()

  const getPhones = () => {
    PhoneService
      .getPhones()
      .then(res => {
        setPhones(res.data)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getPhones()
  }, [])

  return (
    <>
      {!phones ?
        <Container className="d-flex justify-content-center pt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
        :

        <Container className="py-5">
          <Row>
            {phones.map(phone => {
              return (
                <Col key={phone._id} md={3}>
                  <PhoneCard phone={phone} />
                </Col>
              )
            })}
          </Row>
        </Container>
      }
    </>
  )
}

export default List
