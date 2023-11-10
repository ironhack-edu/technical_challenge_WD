import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

let api_url = 'http://localhost:5005/api/phones';

function ColorSchemesExample() {
  const [phoneData, setPhoneData] = useState([]);

  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        console.log(response.data);
        setPhoneData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Navbar bg='primary' data-bs-theme='dark'>
        <Container style={{ textAlign: 'center' }}>
          <Link to='/'>
            <Navbar.Brand style={{ textDecoration: 'none' }}>Phones</Navbar.Brand>
          </Link>
          <Nav className='me-auto'>
            {phoneData.map((data) => (
              <Nav.Link href={`/phones/${data.id}`} key={data.id} style={{ textDecoration: 'none', marginRight: '10px' }}>
                {data.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default ColorSchemesExample;
