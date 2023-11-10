import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [phones, setPhones] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchPhones = () => {
    fetch(`${API_URL}/api/phones`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPhones(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <>
      <div>
        <h1>List of available phones</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="phoneContainer">
            {phones.map((phone) => (
              <div key={phone.id}>
                <img
                  src={`/${phone.imageFileName}`}
                  className="phone-image"
                  alt={`Image of ${phone.name}`}
                />
                <p>{`${phone.name}`}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
