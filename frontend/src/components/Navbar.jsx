import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container style={{ textAlign: 'center' }}>
          <Navbar.Brand href='#home' style={{ textDecoration: 'none' }}>
            Phones
          </Navbar.Brand>
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
