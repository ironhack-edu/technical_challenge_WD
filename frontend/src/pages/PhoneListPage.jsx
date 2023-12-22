import { useState, useEffect } from 'react'
import axios from "axios"
import PhoneDetails from '../../components/phoneDetails'

const API_URL = "http://localhost:3000"

function PhoneListPage() {

    const [phonesList, setPhonesList] = useState(null)


    const getAllPhones = () => {

        axios.get(`${API_URL}/phones`)
            .then((response) => {
                setPhonesList(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAllPhones()
    }, [])

    return (
        <div className='PhonesListPage'>
            <h1>Phones List</h1>
            {phonesList === null
                ? <p>Loading phones list...</p>
                : (
                    <ul className='PhonesList'>
                        {phonesList.map(phone =>
                            <li key={phone.id} >                  
                                    {<PhoneDetails phone={phone} />}
                            </li>
                        )}
                    </ul>
                )}
        </div>
    )
}

export default PhoneListPage