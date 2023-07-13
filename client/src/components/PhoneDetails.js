// import image from "../assets/images/image1.png"; // for image in src folder, images in public can be referenced directly
// import { useState, useEffect } from "react";

// import ClipLoader             from "react-spinners/ClipLoader";
// import BarLoader              from "react-spinners/BarLoader";
// import ClipLoaBounceLoaderder from "react-spinners/BounceLoader";
// import ClimbingBoxLoader      from "react-spinners/ClimbingBoxLoader";
// import PulseLoader            from "react-spinners/PulseLoader";
// import ScaleLoader            from "react-spinners/ScaleLoader";
import SyncLoader             from "react-spinners/SyncLoader";

function PhoneDetails({ phone, isPhoneLoading }) {
  console.log("rendering or re-rendering PhoneDetails");

  // https://stackoverflow.com/questions/38892672/react-why-child-component-doesnt-update-when-prop-changes
  // at first this component was not re-rendered when props was changing...
  // const [value, setValue] = useState(isPhoneLoading);
  // useEffect(() => { setValue(isPhoneLoading) }, [isPhoneLoading]);
  // return <div className="PhoneDetails" key={isPhoneLoading}>

  return <div className="PhoneDetails" >
    <h2>Phone Details</h2>
    { !isPhoneLoading 
      ? <>
        <img src={"../assets/images/" + phone.imageFileName} alt={phone.name} />
        <p>Name: <span>{phone.name}</span></p>
        <p>Manufacturer: <span>{phone.manufacturer}</span></p>
        <p>Description: <span>{phone.description}</span></p>
        <p>Color: <span>{phone.color}</span></p>
        <p>Price: <span>{phone.price}</span></p>
        <p>Screen: <span>{phone.screen}</span></p>
        <p>Processor: <span>{phone.processor}</span></p>
        <p>Ram: <span>{phone.ram}</span></p>
      </>
      : <>
        <p>Loading...</p>
        <SyncLoader
          color={"#bada55"}
          size={10}
          aria-label="Loading SyncLoader Spinner"
          data-testid="loader"
        />
      </>
    }
  </div>
}

export default PhoneDetails;