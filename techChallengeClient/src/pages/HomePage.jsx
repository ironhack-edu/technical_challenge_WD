import PhonesServices from "../services/phones.services"
import { useEffect, useState } from "react"
import PhoneData from "../components/phoneData"
const HomePage = () => {
    useEffect(() => {
        loadPhones()
    }, [])
    const [phoneData, setPhoneData] = useState([])
    const loadPhones = () => {
        PhonesServices
            .getAll()
            .then(({ data }) => setPhoneData(data))
            .catch(err => console.log(err))
    }


    return (
        <>
            {phoneData.map(elm => {


                return (

                    <PhoneData key={elm.id} {...elm} />
                )
            })}
        </>
    )
}
export default HomePage