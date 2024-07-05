import React from "react";
import { Link } from "react-router-dom";

function PhoneCard({ imgSrc, manufacturer, color, name, price, id }) {
  return (
    <div className="flex flex-col gap-4 text-center w-full max-w-[400px] bg-slate-200 border-2 border-slate-200 rounded-md cursor-pointer">
      <Link to={`/phone/${id}`}>
        <img
          className="w-full h-[425px] object-cover"
          src={`images/${imgSrc}`}
          alt="Phone image"
        />
        <p>
          {manufacturer} {name}
        </p>
        <p>Color: {color}</p>
        <p className="mb-4">${price}</p>
      </Link>
    </div>
  );
}

export default PhoneCard;
