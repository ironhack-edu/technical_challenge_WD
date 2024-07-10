import React from "react";
import { Link } from "react-router-dom";

function PhoneCard({ phone }) {
    return (
        <div id="phoneCardContainer">
            <Link to={"/" + phone.id}>
                <div id="phoneCard">
                    <h2>{phone.name}</h2>
                    <img
                    id="phoneImage"
                    src={`http://localhost:5005/assets/images/${phone.imageFileName}`}
                    alt={phone.name}
                    />
                </div>
            </Link>
        </div>
    );
}


export default PhoneCard;