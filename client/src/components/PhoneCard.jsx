// src/components/PhoneCard.jsx
import { Link } from "react-router-dom";
import React from "react";

export default function PhoneCard({ phone }) {
  return (
    <div className="phone-card">
      <div key={phone.id} className="phone-info">
        <img src={phone.imageFileName} />
        <p>{phone.name}</p>
        <p>Manufacturer: {phone.manufacturer}</p>
        <p>Color: {phone.color}</p>
        <p>Price: {phone.price} Euro</p>
      </div>
      <Link to={`/phones/${phone.id}`}>
        <button className="button">View phone Details</button>
      </Link>
    </div>
  );
}