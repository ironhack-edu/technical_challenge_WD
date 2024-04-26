import React, { useEffect, useState } from 'react'
import PhoneService from './service/PhoneService'
import PhoneInfoBox from './pages/PhoneInfoBox';
import Spinner from '../core/Spinner';

export default function HomePhones() {

  const service = new PhoneService();
  const [ phones, setPhones ] = useState([]);

  const getAllPhones = async () => {
    const phonesApi = await service.getAllPhones();
    setPhones(phonesApi);
  }

  const displayPhones = () => {
    return phones.map((phone, i) => {
      return <PhoneInfoBox {...phone} key={i}/>
    })
  }

  useEffect(() => {
    getAllPhones();
  }, [])


  return (
    <div>
      <h2>Phones</h2>
      {!!phones.length ? <div className="phones">{displayPhones()}</div> : <Spinner />
      }
    </div>
  )
}
