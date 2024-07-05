import React from "react";

const PhoneCard = ({ phone }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center p-4 shadow-md rounded-md bg-slate-600 text-slate-50">
      <img src={phone.imageFileName} alt="phone img" />
      <h1 className="text-2xl font-semibold">{phone.name}</h1>
      <h3 className="text-xl">{phone.manufacturer}</h3>
      <p>${phone.price.toFixed(2)}</p>
      <p className="">{phone.color}</p>
    </div>
  );
};

export default PhoneCard;
