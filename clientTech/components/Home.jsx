import phoneServices from "../services/phone.services"
import { useEffect, useState } from "react"
import PhoneCard from "./PhoneCard"

const Home = () => {

    useEffect(() => {
        getPhones()
    }, [])

    const [phones, setPhones] = useState([])

    const getPhones = () => {
        phoneServices
            .getAll()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }


    return (
        <>
            {phones.map(elm => {


                return (

                    <PhoneCard key={elm.id} {...elm} />
                )
            })}
        </>
    )
}
export default Home