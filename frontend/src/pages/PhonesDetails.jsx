import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ColorSchemesExample from '../components/Navbar';
import BorderExample from '../components/BorderExample';

let api_url = 'http://localhost:5005/api/phones';

function PhonesDetails() {
  const { phoneId } = useParams();
  const [phoneDetails, setPhoneDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${api_url}/${phoneId}`)
      .then((response) => {
        setPhoneDetails(response.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setPhoneDetails({});
        } else {
          console.error(err);
        }
      });
  }, [phoneId]);

  return (
    <div style={{ textAlign: 'center' }}>
      <ColorSchemesExample />
      <h1>Phone Details</h1>
      {phoneDetails.imageFileName ? (
        <>
          <img src={`${process.env.PUBLIC_URL}/images/${phoneDetails.imageFileName}`} alt='phone' style={{ width: '250px', height: 'auto' }} />
          <ul style={{ width: '50%', margin: '0 auto', listStyle: 'none' }}>
            <li>{phoneDetails.name}</li>
            <li>{phoneDetails.description}</li>
            <li>{phoneDetails.manufacturer}</li>
            <li>{phoneDetails.price}</li>
            <li>{phoneDetails.processor}</li>
            <li>{phoneDetails.ram}</li>
          </ul>
        </>
      ) : (
        <BorderExample />
      )}
    </div>
  );
}

export default PhonesDetails;
