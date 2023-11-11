// PhoneCard.jsx

import React from "react";
import { useNavigate } from "react-router";

const PhoneCard = ({
  id,
  name,
  manufacturer,
  description,
  color,
  price,
  imageFileName,
  screen,
  processor,
  ram,
}) => {



    const navigator = useNavigate()
  return (
    <div className="w-full rounded shadow-xl">
      <img
        className=""
        src={require(`../assets/images/${imageFileName}`)}
        alt={`${name} - ${color}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {manufacturer}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {color}
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {screen}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {processor}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {ram}GB RAM
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="text-xl font-bold">${price}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right"
          onClick={() => navigator(`/${id}`)}
        >
         View Details
        </button>
      </div>
    </div>
  );
};

export default PhoneCard;
