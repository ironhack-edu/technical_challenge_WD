import React, { useState, useEffect } from "react";
import phoneService from "../../services/phone.service";
import PhoneCard from "./PhoneCard"

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    phoneService
      .getAll()
      .then((response) => {
        setPhones(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-w-full p-6">
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Welcome
            <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              to The
            </mark>{" "}
            Phone Cave
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here, you will find the perfect phone for you!
          </p>
          {phones.map((phoneData) => {
            return <PhoneCard {...phoneData} key={phoneData.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
