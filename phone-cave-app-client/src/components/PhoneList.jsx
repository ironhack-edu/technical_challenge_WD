import PhoneCard from "./PhoneCard";

const PhoneList = ({ allPhones }) => {
  return (
    <div className="phone-list-component">
      <div>
        <h1>Availables Phones</h1>
      </div>

      {allPhones.length > 0 && (
        <div className="phone-list">
          {allPhones.map((phone, index) => {
            return <PhoneCard phone={phone} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PhoneList;
