import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"

const SERVER_URL = 'http://localhost:4004';

const PhonesInfo = () => {
  const [ phone, setPhone ] = useState([]);
  const { phoneId } = useParams();
  const navigate = useNavigate();

  // It will get the phone info based on its id
  const getPhone = () => {
    axios
      .get(`${SERVER_URL}/phones/${phoneId}`)
      .then((response) => {
        console.log(response.data);
        setPhone(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getPhone();
  }, [phoneId]);

  const getImagePath = (imageName) => `../assets/images/${imageName}` || '';

  return (
    <div>
      {/* It will display all the info on the page */}
      <img src={getImagePath(phone.imageFileName)} alt={phone.name} width={'200vw'} height={'200vh'}/>
      <h1>{phone.name}</h1>

      <p>Manufacturer: {phone.manufacture}</p>
      <p>Description: {phone.description}</p>
      <p>Color: {phone.color}</p>
      <p>Price: ${phone.price}</p>
      <p>Screen: {phone.screen}</p>
      <p>Processor: {phone.processor}</p>
      <p>Ram: {phone.ram}</p>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default PhonesInfo
