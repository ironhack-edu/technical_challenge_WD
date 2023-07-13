import { Link } from "react-router-dom";

import ClipLoader             from "react-spinners/ClipLoader";
// import BarLoader              from "react-spinners/BarLoader";
// import ClipLoaBounceLoaderder from "react-spinners/BounceLoader";
// import ClimbingBoxLoader      from "react-spinners/ClimbingBoxLoader";
// import PulseLoader            from "react-spinners/PulseLoader";
// import ScaleLoader            from "react-spinners/ScaleLoader";
import SyncLoader             from "react-spinners/SyncLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red red transparent",
  borderWidth: "5px"
};

function PhonesList({ phones, callbackSetPhone }) {
  console.log("rendering or re-rendering PhonesList");

  const handleClick = (phoneId) => {
    callbackSetPhone(phoneId)
  }

  return <div className="PhonesList">
    <h2>All Phones</h2>
    { phones.length
      ? phones.map(phone => {
          // use Link components instead of hyperlink <a> tags not to reload the page (SPA)
          return <div key={phone.id}>
            {/* <Link to={`/phones/${phone.id}`}>{phone.name}</Link> */}
            <Link onClick={() => { handleClick(phone.id) }}>{phone.name}</Link>
          </div>
        })
      : <>
        <p>Loading...</p>
        <ClipLoader
          color={"#bada55"}
          loading={true}
          // cssOverride={override}
          size={30}
          aria-label="Loading ClipLoader Spinner"
          data-testid="loader"
        />
      </>
    }
  </div>
}

export default PhonesList;