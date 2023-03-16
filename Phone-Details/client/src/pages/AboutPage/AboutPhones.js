import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./PhoneDetails.css";

function PhoneDetails({phoneList}) {
  console.log (phoneList) 

  const [phoneDetails, setPhoneDetails] = useState(null);

  const {id} = useParams();


  useEffect(() => {
    getPhoneDetails();
  }, [id]);


  const getPhoneDetails = async () => {
    console.log (phoneList, id) 
     
    const details =  await phoneList.find(eachPhone => eachPhone.id === Number(id))
    setPhoneDetails(details)
  }


  if(!phoneDetails) {
    return <div>Loading...</div>;
  }

  const {name, manufacturer, description, color, price, screen, processor, ram, imageFileName} = phoneDetails;

  return (
    <div className='itemDetails'>
      <h1>Hola</h1>
      <img src={imageFileName} alt={name}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{manufacturer}</p>
      <p>{price}</p>
      <p>{processor} {ram}</p>
      <p>{screen}</p>
      <p>{color}</p>
    </div>
  );
}

export default PhoneDetails;