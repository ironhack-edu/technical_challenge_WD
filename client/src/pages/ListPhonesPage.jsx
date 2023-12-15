
import { useState, useEffect } from "react"
import phonesServices from "../services/phones.services"
import { Row } from "react-bootstrap"
import PhoneDetails from "../components/PhoneDetails/PhoneDetails"


const ListPhonePage = () => {


    const [phones, setPhones] = useState([])

    useEffect(() => {
        phonesServices
            .getAllPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }, [])

    return (

        <Row>
            <>
                {phones.map((phone) => {


                    return (

                        <PhoneDetails key={phone.id} phone={phone} />
                    )
                })}
            </>


        </Row>
    )



}
export default ListPhonePage