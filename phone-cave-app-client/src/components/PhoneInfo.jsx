import { useNavigate } from "react-router-dom";

const PhoneInfo = ({ selectedPhone }) => {
  const {
    color,
    description,
    imageFileName,
    manufacturer,
    name,
    price,
    processor,
    ram,
    screen,
  } = selectedPhone;

  const navigate = useNavigate();

  return (
    <>
      <div className="phone-info">
        <h1>{name}</h1>
        <div className="phone-img-des">
          <img
            className="phone-img-details"
            src={`../assets/images/${imageFileName}`}
          />
          <div className="phone-description-details">{description}</div>
        </div>
        <div className="horizontal-line"></div>
        <div className="phone-properties-details">
          <h3>Phone properties</h3>
          <div className="properties-details">
            <div>
              <p>
                <b>Brand:</b> {manufacturer}
              </p>
              <p>
                <b>Color:</b> {color[0].toUpperCase() + color.slice(1)}
              </p>
              <p>
                <b>Price:</b> ${price}
              </p>
            </div>

            <div>
              <p>
                <b>Screen:</b> {screen}
              </p>
              <p>
                <b>Processor:</b> {processor}
              </p>
              <p>
                <b>Ram:</b> {ram}GB
              </p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "center" }}>
          <button
            className="back-button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default PhoneInfo;
