import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLoader from "../components/PageLoader";

function PhonePage({ displayedPhones }) {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhone = async () => {
      if (displayedPhones) {
        setTimeout(() => {
          const filteredPhone = displayedPhones.find((elm) => elm.id == id);
          setPhone(filteredPhone);
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchPhone();
  }, [displayedPhones, id]);

  return (
    <div className="container DetailPage">
          {isLoading ? (
            <PageLoader />
          ) : phone ? (
            <div className="flex" key={phone.id}>
              <div className="phone-info">
                <h1>{phone.name}</h1>
                <h2>{phone.price}€</h2>
                <h3>
                  <span>Manufacturer:</span>
                  {phone.manufacturer}
                </h3>
                <h3>
                  <span>Processor:</span>
                  {phone.processor}
                </h3>
                <h3>
                  <span>Ram:</span>
                  {phone.ram}
                </h3>
                <h3>
                  <span>Screen:</span>
                  {phone.screen}
                </h3>
                <hr />
                <p>{phone.description}</p>
              </div>
              <div className="image-wrap">
                <img src={`/images/${phone.imageFileName}`} alt="" />
              </div>
            </div>
          ) : null
          }
    </div>
  );
}

export default PhonePage;
