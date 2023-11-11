import React, { useState, useEffect } from "react";
import phoneService from "../../services/phone.service.js";

function PhoneDetails({
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
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [phone, setPhone] = useState({});

  useEffect(() => {
    phoneService
      .getOne(id)
      .then((response) => {
        setPhone(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={`/client\public\assets\images\${imageFileName}`}
        alt={imageFileName}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name} {manufacturer}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Color: {color}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Price: {price}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Screen: {screen}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Processor: {processor}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Ram: {ram}
        </p>
      </div>
    </div>
  );
}

export default PhoneDetails;
