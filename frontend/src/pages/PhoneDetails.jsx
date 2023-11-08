import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

function PhoneDetails({ phoneList }) {
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(true);

  const { phoneId } = useParams();
  const navigate = useNavigate();

  // Define getPhoneDetails using useCallback
  const getPhoneDetails = useCallback(async () => {
    setFetchingDetails(true);

    const phoneToRender = phoneList.find((eachPhone) => eachPhone.id === Number(phoneId));

    setTimeout(() => {
      if (!phoneToRender) {
        navigate('/not-found');
        return;
      }
      setPhoneDetails(phoneToRender);
      setFetchingDetails(false);
    }, 500);
  }, [phoneId, navigate, phoneList]);

  useEffect(() => {
    getPhoneDetails();
  }, [getPhoneDetails]);

  if (fetchingDetails) {
    return <Spinner animation='border' variant='info' />;
  }

  const { name, manufacturer, description, color, price, screen, processor, ram, imageFileName } = phoneDetails;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={`/images/${imageFileName}`} />
      <Card.Body>
        <Card.Title>
          {name}by {manufacturer}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <ListGroup className='list-group-flush'>
        <ListGroupItem>Color; {color}</ListGroupItem>
        <ListGroupItem>{screen}</ListGroupItem>
        <ListGroupItem>
          Proc: {processor}. Ram: {ram}
        </ListGroupItem>
        <ListGroupItem>Starting from: {price}$</ListGroupItem>
      </ListGroup>

      <Card.Body>
        <Link to='/'>Go Back</Link>
      </Card.Body>
    </Card>
  );
}

export default PhoneDetails;
