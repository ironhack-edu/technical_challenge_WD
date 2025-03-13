import { listAllPhonesService } from "../services/phone.services";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function MainScreen() {
  const [phones, setPhones] = useState(null);
  const [loading, setLoanding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    listAllPhonesService()
      .then((response) => {
        console.log("all phones data--->", response);
        setPhones(response.data);
        setLoanding(false);
      })
      .catch((error) => {
        setError(error);
        console.log("There has been an error in the API call->", error);
      });
  }, []);
  return (
    <>
      <div className="p-3" style={{ marginTop: "50px" }}>
        <div>
          <h1 className="text-center">Here are all our phones 📱 </h1>
          {loading && (
            <div style={{ position: "absolute", top: "50vh", left: "45vw" }}>
              <BeatLoader />
            </div>
          )}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {phones &&
              phones.map((phone) => (
                <div className="col" key={phone.id}>
                  <div className="card">
                    <img
                      src={`/images/${phone.imageFileName}`}
                      style={{height:"400px", objectFit: "contain"}}
                      className="card-img-top"
                      alt="phone image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{phone.name}</h5>
                      <p className="card-text" style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{phone.description}</p>
                      <Link to={`/phones/${phone.id}`} className="btn btn-primary">See details</Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
