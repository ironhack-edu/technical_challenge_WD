import { useEffect, useState } from "react"
import phoneServices from "../services/phones.services"
import PhoneCard from "../components/phoneCard"
import { Row } from "react-bootstrap"
import './PhonesPage.css'

const PhonesPage = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        phoneServices
            .getPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Row>
        {
            phones.length === 0 ?
                <h1>Loading...</h1>
            :
                phones.map((phone) => <PhoneCard key={phone.id} phone={phone} />)
        }
        </Row>
    )
}

export default PhonesPage