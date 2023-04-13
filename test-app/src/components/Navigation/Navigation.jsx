import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"


const Navigation = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand as="span">Phones</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/phones">
                                <Nav.Link as="span">List of Phones</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation