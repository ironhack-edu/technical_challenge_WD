import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

import PhoneCard from "../components/PhoneCard";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};
const color = "#65a30d";

const phonesURL = "http://localhost:8080/phones";

function HomePage() {
  const [phones, setPhones] = useState(null);

  const getAllPhones = async () => {
    try {
      const response = await axios.get(phonesURL);
      setPhones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">All Phones</h1>

      {phones ? (
        <div className="flex flex-col justify-center gap-4 items-center md:flex-row md:flex-wrap w-full max-w-[1300px] py-12 mx-auto">
          {phones.map((phone, index) => {
            return (
              <PhoneCard
                key={index}
                imgSrc={phone.imageFileName}
                manufacturer={phone.manufacturer}
                color={phone.color}
                name={phone.name}
                price={phone.price}
                id={phone.id}
              />
            );
          })}
        </div>
      ) : (
        <ClipLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
}

export default HomePage;
