import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <Link to="/" className="home-btn">Home</Link>
        <Link to="/phones" className="phones-btn">Phones</Link>
    </nav>
  )
}
