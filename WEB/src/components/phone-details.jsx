import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPhoneDetails } from '../service/api-service'

function PhoneDetails() {
  const { id } = useParams()
  const [phone, setPhone] = useState([])
  

  useEffect(() => {
    getPhoneDetails(id)
      .then((phone) => {
        setPhone(phone)
        console.log(phone)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
      <div>
          <h1>{phone.name}</h1>

      </div>
  )
}

export default PhoneDetails