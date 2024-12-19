import React from "react";
import "./PhoneDetails.css"; // Add a CSS file for styling

interface Phone {
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  screen: string;
  processor: string;
  ram: number;
  imageFileName: string;
}

const PhoneDetails: React.FC<{ phone: Phone }> = ({ phone }) => {
  if (!phone) return null;

  const imageFileName =
    phone.imageFileName && typeof phone.imageFileName === "string"
      ? phone.imageFileName
      : "";

  return (
    <div className="phone-details-container">
      <h2>{phone.name}</h2>
      <img
        className="phone-image"
        src={`../../assets/images/${imageFileName}`}
        alt={phone.imageFileName}
      />
      <div className="phone-info">
        <p>
          <strong>Manufacturer:</strong> {phone.manufacturer}
        </p>
        <p>
          <strong>Description:</strong> {phone.description}
        </p>
        <p>
          <strong>Color:</strong> {phone.color}
        </p>
        <p>
          <strong>Price:</strong> ${phone.price}
        </p>
        <p>
          <strong>Screen:</strong> {phone.screen}
        </p>
        <p>
          <strong>Processor:</strong> {phone.processor}
        </p>
        <p>
          <strong>RAM:</strong> {phone.ram} GB
        </p>
      </div>
    </div>
  );
};

export default PhoneDetails;
