import React, { useEffect, useState } from 'react'
import PhoneService from './service/PhoneService';
import { useParams } from 'react-router-dom';
import Spinner from '../core/Spinner';

export default function PhoneDetails() {
  const service = new PhoneService();
  const [ phone, setPhone ] = useState();

  const { id } = useParams();

  const getPhone = async () => {
    const phoneApi = await service.getPhoneDetails(id);
    setPhone(phoneApi)
  }
  

  useEffect(() => {
    getPhone();
  }, [])

  return (
    <div>
      <h2>ContactDetails</h2>
      {!!phone ? 
        <div className='phone'>
          <div className="main-info">
            <img src={require(`../../assets/images/${phone.imageFileName}`)} alt={phone.name} />
            <div>
              <h3>{phone.name}</h3>
              <h3>${phone.price}</h3>
            </div>
          </div>
          <div className="extra-info">
            <p><b>Description: </b>{phone.description}</p>
            <p><b>Manufacturer: </b>{phone.manufacturer}</p>
            <p><b>Processor: </b>{phone.processor}</p>
            <p><b>Color: </b>{phone.color}</p>
            <p><b>Screen: </b>{phone.screen}</p>
            <p><b>Ram: </b>{phone.ram}</p>
          </div>
        </div>
        : <Spinner />
      }
    </div>
  )
}
