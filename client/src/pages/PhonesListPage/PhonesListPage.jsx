import { useEffect, useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


import phonesService from "../../services/phones.services"

const PhonesListPage = () => {

    const [phones, setPhones] = useState()

    useEffect(() => {
        loadPhones()
    }, [])

    const loadPhones = () => {
        phonesService
            .phones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <h1>PhonesListPage</h1>

            <hr />
            <Row>
                {
                    !phones
                        ?
                        <p>Cargando...</p>
                        :
                        phones.map(elm => {
                            return (
                                <Col md={{ span: 4 }} key={elm._id}>
                                    <Card className="mb-3">
                                        <Card.Img variant="top" src={elm.imageFileName} />
                                        <Card.Body>
                                            <Card.Title>{elm.name}</Card.Title>
                                            <div className="d-grid">
                                                <Link to={`/phones/${elm._id}`} className="btn btn-dark btn-sm">Details</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                }
            </Row>

        </Container>

    )
}

export default PhonesListPage