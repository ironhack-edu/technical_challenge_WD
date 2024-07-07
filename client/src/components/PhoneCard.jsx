import { Link } from "react-router-dom";

function PhoneCard({ imageFileName, manufacturer, name, color, price, id }) {
  return (
    <div key={id} className="PhoneCard">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={`../public/images/${imageFileName}`}
          alt="Phone Img"
        />
        <div className="card-body">
          <h5 className="card-title">
            {manufacturer} {name}
          </h5>

          <p>Color: {color}</p>
          <p>Price: ${price}</p>
          <Link to={`/phones/${id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhoneCard;
