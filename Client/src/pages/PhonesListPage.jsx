import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PhonesListPage() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllPhones = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/phones`);
      if (response.ok) {
        const allPhones = await response.json();
        setPhones(allPhones);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPhones();
  }, []);

  if (isLoading) {
    return (
      <div className="half-circle-spinner">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    );
  }

  return (
    <>
      <h1>List of all the phones we have available</h1>
      <ul
        style={{
          listStyle: "none",
          display: "grid",
          gridTemplate: "auto / repeat(4, 1fr)",
          gap: "1rem",
          padding: "0 1rem",
        }}
      >
        {phones.map((phone) => {
          const imagePath = `/images/${phone.imageFileName}`;
          return (
            <li
              key={phone._id}
              style={{
                padding: "1rem",
                borderRadius: "12px",
                boxShadow: "1px 2px 7px 2px black",
              }}
            >
              <Link to={`/phones/${phone._id}`}>
                <div>
                  <img
                    src={imagePath}
                    style={{ height: "200px" }}
                    alt={phone.name}
                  />
                  <h3>{phone.name}</h3>
                  <h4>{phone.manufacturer}</h4>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PhonesListPage;
