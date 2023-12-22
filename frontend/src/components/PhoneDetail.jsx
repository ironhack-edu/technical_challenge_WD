const PhoneDetail = ({ phone }) => {
  if (!phone) {
    return <div>Select a phone from the list</div>;
  }

  const imageName = phone.imageFileName.replace(/\s/g, "_");

  return (
    <div style={{marginBottom:65}}>
      <h2>{phone.name}</h2>
      <div style={{ display: "flex" }}>
        <img
          src={`/assets/images/${imageName}`}
          alt={phone.name}
          style={{ width: "20%" }}
        />
        <div>
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Description: {phone.description}</p>
          <p>Price: ${phone.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
