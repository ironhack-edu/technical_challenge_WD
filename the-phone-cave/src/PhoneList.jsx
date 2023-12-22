import axios from "axios";
import { useEffect, useState } from "react";


const API_URL = "http://localhost:5005"
const imagePath = "the-phone-cave/assets/images/"


function PhoneList (){
    const [phoneList, setPhoneList] = useState([])
    const [selectedPhone, setSelectedPhone] = useState(null)
    const [loading, setLoading] = useState(true)

    const gettAllPhones = () => {
        axios
        .get(`${API_URL}/phones`)
        .then((response) => {
            console.log(response.data)
            setPhoneList(response.data)
        })
        .catch((error) => {
            console.log("error getting phones," + error)
        })
    }

    const showDetails = (phone) => {
        console.log(phone)
        setSelectedPhone(phone)
    }

    const changeLoading = () => {
        setLoading(false)
    }

    setTimeout(() => {
        changeLoading()
    }, 2000)

    useEffect(() => {
        gettAllPhones()
    }, [])

    return (
        <div className = "PhoneList">
            <h2>List of the phones:</h2>
            {loading ? 
            <p>Loading...</p>
            :
            <div>
                {phoneList.map((phone) => {
                    return <div>
                    <h3 key={phone.id} onClick={() => showDetails(phone)}>{phone.name}</h3>
                    </div>
                })}
            </div>
        }

            {selectedPhone && (
                <div className="PhoneDetails">
                    <h3>Details of {selectedPhone.name}</h3>
                    <p>Manufacturer: {selectedPhone.manufacturer}</p>
                    <p>Description: {selectedPhone.description}</p>
                    <p>Color: {selectedPhone.color}</p>
                    <p>Price: {selectedPhone.price}</p>
                    <p>Screen: {selectedPhone.screen}</p>
                    <p>Processor: {selectedPhone.processor}</p>
                    <p>RAM: {selectedPhone.ram}</p>
                </div>
            )}
        </div>
    )

}

export default PhoneList 