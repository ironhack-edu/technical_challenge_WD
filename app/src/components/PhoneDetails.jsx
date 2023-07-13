import { useEffect, useState } from 'react'
import backendApi from '../services/backendApi';
import { number } from 'prop-types';

export default function PhonesDetails({ id }) {
  const [phone, setPhone] = useState(null);
  useEffect(() =>{
    backendApi.get('/phones/' + id)
      .then(response => setPhone(response.data))
      .catch(console.error);
  }, [id])

  return (
    <section>
      {!phone && <p>Please, select a phone to display it&lsquo;s details...</p>}
      {phone && <div id="phone-details">
          <div><img src={`/images/${phone.imageFileName}`} /></div>
          <div id="phone-characteristics">
            <p>Manufacturer: {phone.manufacturer}</p>
            <p>Model: {phone.name}</p>
            <p>Description:<br/> {phone.description}</p>
            <p>Color: {phone.color}</p>
            <p>Price: {phone.price} €</p>
            <p>Screen: {phone.screen}</p>
            <p>Processor: {phone.processor}</p>
            <p>Ram: {phone.ram} GB</p>
          </div>  
      </div>
      }
    </section>
  )
}

PhonesDetails.propTypes = {
  id: number
}
