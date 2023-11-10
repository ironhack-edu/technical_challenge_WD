import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PhoneListPage() {
  const [phones, setPhones] = useState([]);

  const fetchAllPhones = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/phones`);
      if (response.ok) {
        const allPhones = await response.json();
        setPhones(allPhones);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPhones();
  }, []);

  return (
    <>
      <ul className="booksGrid">
        {phones.map((phone) => (
          <li key={phone._id}>
            <Link to={`/phones/${phone._id}`}>
              <div>
                <img
                  //   src={`Client/src/assets/images/${phone.imageFileName}`}
                  style={{ height: "200px" }}
                />
                <h3>{phone.name}</h3>
                <h4>{phone.manufacturer}</h4>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PhoneListPage;
