import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Phones() {
    const [phones, setPhones] = useState([]);
  
    useEffect(() => {
      // Make a GET request to the API endpoint
      axios.get('/data/phones.json')
        .then(response => {
          // Update the state with the fetched beer data
          setPhones(response.data);
        })
        .catch(error => {
          console.error('Error fetching phones data:', error);
        });
    }, []);
  
        return (
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {phones.map((phone) => (
                  <Card key={phone.id} style={{ width: '18rem',
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Center horizontally
                    justifyContent: 'center', // Center vertically
                    textAlign: 'center', }}>
                    <Link to={`/phones/${phone.id}`}>
                    <Card.Img
                      variant="top"
                      src={`/images/${phone.imageFileName}`} // You may need to adjust the image source path
                      alt="phoneimage"
                      style={{ width: '200px', height: '200px' }}
                    />
                    </Link>
                    <Card.Body>
                      <Link to={`/phones/${phone.id}`}>
                        <Card.Title style={{ textDecoration: 'none', color: 'orange' }}>
                          {phone.name}
                        </Card.Title>
                      </Link>
                      <Card.Text>
                        Price: {phone.price}€
                        <br />
                        Manufacturer: {phone.manufacturer}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          );
  }
  
  export default Phones;

