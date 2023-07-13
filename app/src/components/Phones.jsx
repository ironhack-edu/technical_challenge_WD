import { useEffect, useState } from 'react'
import backendApi from '../services/backendApi';
import PhonesDetails from './PhoneDetails';

export default function Phones() {
  const [phones, setPhones] = useState(null);
  useEffect(() =>{
    backendApi.get('/phones')
      .then(response => setPhones(response.data))
      .catch(console.error);
  }, [])

  return (
    <>
      <div>
        { !phones && <p>Loading...</p>}
        { phones && <ul>
          {phones.map(p => <li key={p.id}>{p.id} / {p.name}/ {p.manufacturer} / {p.description} / {p.color} / {p.price} / <img src={`/images/${p.imageFileName}`} /> / {p.screen} / {p.processor} / {p.ram}</li>)}
          </ul>
        }

      </div>
    </>
  )
}