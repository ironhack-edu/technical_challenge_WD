import React from "react";
import { Link } from "react-router-dom";

export default function PhoneCard({
  id,
  name,
  manufacturer,
  imageFileName,
  price,
}) {
  // Construct the image source path

  return (
    <>
      <Link to={`/phones/${id}`}>
        <a
          class="flex flex-row items-center content-center bg-white border border-gray-200 rounded-lg mb-10 md:items-center shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={`./images/${imageFileName}`}
            alt={name}
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {manufacturer}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {price}$
            </p>
          </div>
        </a>
      </Link>
    </>
  );
}
