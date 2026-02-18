import { useEffect, useState } from "react";
import type { Phone } from "../types/Phone";
import { getPhoneById, getPhones } from "../api/api.service";

const PhoneList = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhones = async () => {
      setLoading(true);
      const data = await getPhones();
      setPhones(data);
      setLoading(false);
    };

    fetchPhones();
  }, []);

  const handleSelect = async (id: number) => {
    setLoading(true);
    const phone = await getPhoneById(id);
    setSelectedPhone(phone);
    setLoading(false);
  };

  const getImageUrl = (fileName: string) => {
    return new URL(`../assets/images/${fileName}`, import.meta.url).href;
  };

  return (
    <div className="container">
      {loading && <div className="spinner">loading...</div>}

      <div className="phone-list">
        {phones.map((phone) => {
          return (
            <div
              key={phone.id}
              onClick={() => handleSelect(phone.id)}
              className={`phone-item ${selectedPhone?.id === phone.id ? "active" : ""}`}
            >
              <img
                src={getImageUrl(phone.imageFileName)}
                alt={phone.name}
                className="list-thumb"
              />
              <span>{phone.name}</span>
            </div>
          );
        })}
      </div>

      <div className="phone-details">
        {selectedPhone ? (
          <div className="details-card">
            <img
              src={getImageUrl(selectedPhone.imageFileName)}
              alt={selectedPhone.name}
              className="detail-img"
            />
            <h2>{selectedPhone.name}</h2>
            <p className="manufacturer">{selectedPhone.manufacturer}</p>
            <p className="manufacturer">{selectedPhone.description}</p>
            <div className="specs">
              <span>
                <strong>Screen: </strong>
                {selectedPhone.screen}
              </span>
              <span>
                <strong>Processor: </strong>
                {selectedPhone.processor}
              </span>
              <span>
                <strong>RAM: </strong>
                {selectedPhone.ram}
              </span>
            </div>
            <p className="price">€{selectedPhone.price}</p>
          </div>
        ) : (
          <div className="empty-state">Select a phone to see details</div>
        )}
      </div>
    </div>
  );
};

export default PhoneList;
