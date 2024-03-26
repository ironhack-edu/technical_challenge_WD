export default function PhoneCard({ phone, showDetails }) {
  const { imageFileName, name, manufacturer, id } = phone;

  return (
    <div style={{ display: "flex" }}>
      <img
        src={`/images/${imageFileName}`}
        alt={name}
        style={{ width: "20%" }}
      />
      <div>
        <h2>{name}</h2>
        <h3>{manufacturer}</h3>
        <button
          style={{ backgroundColor: "gray", color: "white" }}
          onClick={() => showDetails(id)}
        >
          See more
        </button>
      </div>
    </div>
  );
}
