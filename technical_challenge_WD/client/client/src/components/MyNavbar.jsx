import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function MyNavbar({ phonesList }) {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to={`/`}>Home</Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {phonesList.map((eachPhone) => {
                        return(
                            <Link to={`/phone-details/${eachPhone.id}`} key={eachPhone.id}>
                                {eachPhone.name}
                            </Link>
                        )
                    })}

                    </Nav>
                </Navbar.Collapse>
                

               
            </Container>
        </Navbar>
    )
}

export default MyNavbar;