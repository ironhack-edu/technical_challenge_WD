export default function Detail({ phoneDetails }) {
  return (
    <div className="center">
      <div className="card">
      <img src={phoneDetails.imageFileName} className="card-img-top detailsImg" alt={phoneDetails.name}/>
        <div className="card-body">
          <h3 className="card-title">{phoneDetails.name}</h3>
          <p className="card-text manufacturer">Manufacturer: {phoneDetails.manufacturer}</p>
          <p className="card-text description">{phoneDetails.description}</p>
          <p className="card-text">Color: {phoneDetails.color}</p>
          <p className="card-text">Price: {phoneDetails.price}</p>
          <p className="card-text">Screen: {phoneDetails.screen}</p>
          <p className="card-text">Processor: {phoneDetails.processor}</p>
          <p className="card-text">RAM: {phoneDetails.ram}</p>

        </div>
      </div>
    </div>
  );
}
