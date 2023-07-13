import { useEffect, useState } from 'react'
import backendApi from '../services/backendApi';
import PhonesDetails from './PhoneDetails';
import Spinner from './Spinner';

export default function Phones() {
  const [phones, setPhones] = useState(null);
  const [selectedPhone, setSelectedPhone] = useState(null);
  useEffect(() =>{
    setTimeout(() => {
      backendApi.get('/phones')
      .then(response => setPhones(response.data))
      .catch(console.error);
    }, 1000);
  }, [])

  const displayPhoneDetails = (event, id) => {
    event.preventDefault();
    setSelectedPhone(id);
  } 

  return (
    <div>
      <div id="phones">
        <>
          { !phones && <Spinner />}
          { phones && <ul>
            {phones.map(p => <li key={p.id}><a href={`/phones/${p.id}`} onClick={(e) => displayPhoneDetails(e, p.id)}>{p.manufacturer} {p.name}</a></li>)}
            </ul>
          }

        </>
      </div>
      { phones && <PhonesDetails id={selectedPhone} /> }
    </div>
  )
}