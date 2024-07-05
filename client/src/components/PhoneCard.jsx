import React from "react";
import { Link } from "react-router-dom";

export default function PhoneCard({ phone }) {
  return (
    <div id="phoneCardContainer">
      <Link to={"/" + phone.id}>
      <div id="phoneCard">
      <h2>{phone.name}</h2>
        <img
          id="phoneImg"
          src={`http://localhost:5005/assets/images/${phone.imageFileName}`}
          alt={phone.name}
        />
        </div>
      </Link>
    </div>
  );
}