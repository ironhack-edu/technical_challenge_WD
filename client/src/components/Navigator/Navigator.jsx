import { Link } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function Navigator() {
	return (
		<Navbar bg="dark" variant="dark" expand="sm">
			<Container>
				<Link to="/">
					<Navbar.Brand as="div">phontastic_</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/phones">
							<Nav.Link as="div">Phones</Nav.Link>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigator
