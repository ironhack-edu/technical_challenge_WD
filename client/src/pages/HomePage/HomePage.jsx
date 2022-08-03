import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h1>Phone App!</h1>
                    <hr />
                    <p>All phone available</p>
                    <Link to="/phones">
                        <Button variant="dark" >Go to gallery</Button>
                    </Link>

                </Col>

            </Row>

        </Container>
    )
}

export default HomePage