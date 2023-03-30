import "./Navbar.css";
import { Navbar,Container, Button } from "react-bootstrap";


function NavbarP() {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{justifyContent:"center"}}>
      <Button href="/phones" >
      Phones
      </Button>
      </Container>    
    </Navbar>
  );
}

export default NavbarP;