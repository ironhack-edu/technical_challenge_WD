import { useEffect, useState } from 'react'
import backendApi from '../services/backendApi';
import { number } from 'prop-types';
import Spinner from './Spinner';

export default function PhonesDetails({ id }) {
  const [phone, setPhone] = useState(null);
  useEffect(() =>{
    setPhone(null);
    setTimeout(() => {
      backendApi.get('/phones/' + id)
        .then(response => setPhone(response.data))
        .catch(console.error);
    }, 1000);
  }, [id])

  return (
    <div id="phone-details">
      {id ===null && <h2>Please, select a phone to get details...</h2>}
      {id !== null && phone === null && <Spinner />}
      {id !== null && phone !== null && <>
          <div><img src={`/images/${phone.imageFileName}`} /></div>
          <div id="phone-characteristics">
            <label>Model</label>
            <span> {phone.name}</span>
            <label>Manufacturer</label>
            <span> {phone.manufacturer}</span>
            <label>Description</label>
            <span> {phone.description}</span>
            <label>Color</label>
            <span> {phone.color}</span>
            <label>Price</label>
            <span> {phone.price} €</span>
            <label>Screen</label>
            <span> {phone.screen}</span>
            <label>Processor</label>
            <span> {phone.processor}</span>
            <label>Ram</label>
            <span> {phone.ram} GB</span>
          </div>  
      </>
      }
    </div>
  )
}

PhonesDetails.propTypes = {
  id: number
}
