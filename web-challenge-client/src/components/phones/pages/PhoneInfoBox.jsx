import React from 'react'
import { Link } from 'react-router-dom'


export default function PhoneInfoBox({name, imageFileName, price, id}) {
  return (
    <Link to={`/phones/${id}`} className="phone-card">
        <img src={require(`../../../assets/images/${imageFileName}`)} alt={name} />
        <h5>{name}</h5>
        <h5>${price}</h5>
    </Link>
  )
}
