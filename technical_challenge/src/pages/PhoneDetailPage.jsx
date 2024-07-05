import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const phonesURL = "http://localhost:8080/phones";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};
const color = "#65a30d";

function PhoneDetailPage() {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState(null);

  const getPhone = async () => {
    try {
      const response = await axios.get(`${phonesURL}/${phoneId}`);
      setPhone(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhone();
  }, []);
  return (
    <div className="w-full max-w-[600px] mx-auto text-center my-12 bg-slate-200 border-2 border-slate-200 rounded-md">
      <h1 className="text-4xl py-4">Phone Details</h1>
      {phone ? (
        <div className="flex flex-col gap-2 py-4 px-4">
          <img
            src={`../public/images/${phone.imageFileName}`}
            alt="Phone image"
          />
          <p>
            {phone.manufacturer} {phone.name}
          </p>
          <p>Color: {phone.color}</p>
          <p>${phone.price}</p>
          <p>Description: {phone.description}</p>
          <p>Screen: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>Ram: {phone.ram}</p>
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

export default PhoneDetailPage;

// {
//     "id": 0,
//     "name": "iPhone 7",
//     "manufacturer": "Apple",
//     "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
//     "color": "black",
//     "price": 769,
//     "imageFileName": "IPhone_7.png",
//     "screen": "4,7 inch IPS",
//     "processor": "A10 Fusion",
//     "ram": 2
// },
