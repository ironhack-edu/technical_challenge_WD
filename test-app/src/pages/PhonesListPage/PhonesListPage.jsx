import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import PhonesList from "../../components/PhoneList/PhoneList"
import phonesService from "../../services/phone.services"

const PhonesListPage = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        loadPhones()
    }, [])

    const loadPhones = () => {
        phonesService
            .getPhones()
            .then(({ data }) => {
                setPhones(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>Phone List</h1>
            <hr />
            <PhonesList phones={phones} />
        </Container>
    )
}

export default PhonesListPage