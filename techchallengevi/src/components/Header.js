import React, {  } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{color:'white'}}>PhonesCave</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" style={{color:'grey'}}>Home</Nav.Link>
            <Nav.Link href="/phones" style={{color:'grey'}}>Phones</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;