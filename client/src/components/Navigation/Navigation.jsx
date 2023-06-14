
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">PHONES-APP</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/phones">Phones</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )

}
export default Navigation