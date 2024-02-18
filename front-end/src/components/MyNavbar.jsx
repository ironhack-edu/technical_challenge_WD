// import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MyNavbar({ phones }) {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Phones</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link><NavLink className="nav-link" to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="nav-link" to="/phones">Phones</NavLink></Nav.Link>
                        {phones.map(phone => {
                            return <Nav.Link><NavLink className="nav-link" to={`/phones/${phone.id}`} key={phone.id}>{phone.name}</NavLink></Nav.Link>
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;