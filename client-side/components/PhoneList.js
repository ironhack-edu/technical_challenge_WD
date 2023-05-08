import React from "react";

const PhoneList = ({ phones, onPhoneClick }) => {
  return (
    <div className="phone-list">
      <ul>
        {phones.map((phone) => (
          <li key={phone.id} onClick={() => onPhoneClick(phone.id)}>
            {phone.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
