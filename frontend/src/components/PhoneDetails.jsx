import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "http://localhost:3000"

function PhoneDetails(props) {

    const [phoneDetails, setPhoneDetails] = useState(null)
    const [showPhoneDetails, setShowPhoneDetails] = useState(false)

    const isPhoneDetailsShowing = () => setShowPhoneDetails(!showPhoneDetails)

    const getPhoneById = () => {

        axios.get(`${API_URL}/phones/${props.phone.id}`)
            .then((response) => {
                setPhoneDetails(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPhoneById()
    }, [showPhoneDetails])

    return (
        <div className="PhoneDetails">

            <button onClick={isPhoneDetailsShowing}>{props.phone.name}</button>
            {phoneDetails === null
                ? <h1>Loading details...</h1>
                : <div className={`DetailsContainer ${showPhoneDetails ? "show" : "hide"}`}>
                    <div className="PhoneImageContainer">
                        <img src={`./images/${phoneDetails[0].imageFileName}`} alt={phoneDetails[0].name} className="PhoneImage" />
                    </div>
                    <div className="PhoneDetailsContainer">
                        <h1>{phoneDetails[0].name}</h1>
                        <p>{phoneDetails[0].manufacturer}</p>
                        <p>{phoneDetails[0].description}</p>
                        <p>{`Color: ${phoneDetails[0].color}`}</p>
                        <p>{`Price: ${phoneDetails[0].price} €`}</p>
                        <p>{`Screen: ${phoneDetails[0].screen}`}</p>
                        <p>{`Processor: ${phoneDetails[0].processor}`}</p>
                        <p>{`RAM: ${phoneDetails[0].ram} GB`}</p>
                    </div>
                </div>}
        </div>
    )
}

export default PhoneDetails