import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom'
import { getPhones } from '../service/api-service'


function Phones() {
  const [phones, setPhones] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getPhones()
      .then((phones) => {
        setPhones(phones)
        console.log(phones)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
      <div>
          <h1>Phones</h1>
          <ul>
              {phones.map((phone) => (
                
                  <li key={phone.id}>
                      <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default Phones