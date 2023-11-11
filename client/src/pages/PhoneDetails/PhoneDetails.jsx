import React, { useState, useEffect } from "react";
import phoneService from "../../services/phone.service.js";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";

function PhoneDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [phone, setPhone] = useState({});
  const params = useParams();
  const id = params.id;
 const navigate = useNavigate();
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
    <div className="flex flex-row items-start bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ReactLoading
            type={"spin"}
            color={"white"}
            height={667}
            width={375}
          />
        </div>
      ) : (
        <div className="flex flex-row">
  <img
    className="object-cover w-48 h-96 rounded-l-lg md:rounded-none md:rounded-s-lg"
    src={`/assets/images/${phone.imageFileName}`}
    alt={phone.imageFileName}
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {phone.name} {phone.manufacturer}
    </h5>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      {phone.description}
    </p>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Color: {phone.color}
    </p>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Price: {phone.price}
    </p>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Screen: {phone.screen}
    </p>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Processor: {phone.processor}
    </p>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Ram: {phone.ram}
    </p>
    <a
      href="#"
      className="inline-flex items-center justify-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={() => navigate(`/`)}
    >
      Go back
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>
      )}
    </div>
  );
}

export default PhoneDetails;
