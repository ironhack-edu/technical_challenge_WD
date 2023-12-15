import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import phoneServices from "../services/phone.services"

const PhoneDetails = () => {
    const { id } = useParams()
    const [phones, setPhones] = useState(null)

    useEffect(() => {
        chargeDetails()
    }, [])

    const chargeDetails = () => {

        phoneServices
            .getAll()
            .then(({ data }) => {
                const onePhone = data.find(element => element.id == id)
                if (onePhone) {
                    setPhones(onePhone)
                } else {
                    console.log("Error")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {phones ?
                <div>
                    <h1 style={{ color: 'pink' }}>{phones.name}</h1>
                    <p>{phones.description}</p>
                    <p>{phones.manufacterer}</p>
                    <p>{phones.price}</p>
                    <p>{phones.processor}</p>
                    <p>{phones.ram}</p>
                    <p>{phones.screen}</p>


                </div>
                :
                <p>Loading...</p>
            }
        </div>
    )

}


export default PhoneDetails 