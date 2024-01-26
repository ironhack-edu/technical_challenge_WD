import { Link } from "react-router-dom";

const PhoneCard = ({ phone }) => {
  const { name, imageFileName, price, id } = phone;

  return (
    <div className="phone-card">
      <img
        className="phone-img"
        src={`../assets/images/${imageFileName}`}
        style={{ alignSelf: "center" }}
      />
      <div className="phone-name-price">
        <div>{name}</div>
        <div>${price}</div>
      </div>
      <Link
        to={`/details/${id}`}
        className="link"
        style={{ alignSelf: "center" }}
      >
        <button className="details-button">Details</button>
      </Link>
    </div>
  );
};

export default PhoneCard;
