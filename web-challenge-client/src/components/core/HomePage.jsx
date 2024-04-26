import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home-page">
        <p>Check out the phones in store...</p>
        <Link to="/phones" className='click-btn'>Click Here</Link>
    </div>
  )
}
