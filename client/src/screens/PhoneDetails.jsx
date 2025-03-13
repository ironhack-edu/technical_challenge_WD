import { listPhoneDetails } from "../services/phone.services";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";

function PhoneDetails ( ) {
    const {id} = useParams()
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(()=>{
        listPhoneDetails(id)
            .then((response)=>{
                console.log("check details-->", response)
                setDetails(response.data)
                setLoading(false)

            })
            .catch((error)=>{
                console.log("Error while getting data-->", error)
                setError(error)
                setLoading(false)

            })
    },[])

    return (
        <div style={{ marginTop: "50px" }} className="p-3">
            <h1>Phone details</h1>
            {loading && (
            <div style={{ position: "absolute", top: "50vh", left: "45vw" }}>
              <BeatLoader />
            </div>
          )}
          {details && (
            <div className="p-3 border rounded mt-3">
                <h2>Model: {details.name}</h2>
                <img
                      src={`/images/${details.imageFileName}`}
                      style={{height:"400px", objectFit: "contain"}}
                      className="card-img-top"
                      alt="phone image"
                    />
                <ul>
                    <li>Manufacturer: {details.manufacturer}</li>
                    <li>Description: {details.description}</li>
                    <li>Price: {details.price}</li>
                    <li>Screen size: {details.screen}</li>
                    <li>Processor: {details.processor}</li>
                    <li>Ram: {details.ram}</li>
                    
                </ul>
            </div>
          )}
          {error && (
            <div>
                <p>Error message: {error}</p>
            </div>
          )}

            
        </div>
    )
}

export default PhoneDetails;