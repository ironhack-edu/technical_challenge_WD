import { Link } from 'react-router-dom';

// style components from Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// this component is a navbar that displays all the phone models form the Server, they come via props from
function MyNavBar({ phonesList }) {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link onTouchMoveCapture={'/'}>Home</Link>
      </Container>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>
      <Nav className='me-auto'>
        {phonesList.map((eachPhone) => {
          return (
            <Link to={`/phone-details/${eachPhone.id}`} key={eachPhone.id}>
              {eachPhone.name}
            </Link>
          );
        })}
      </Nav>
    </Navbar>
  );
}

export default MyNavBar;
