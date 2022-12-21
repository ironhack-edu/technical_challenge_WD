import PhoneCard from "../PhoneCard/PhoneCard"

const PhoneList = ({ phones }) => {
    return (
        phones.map(({ id, name }) => <PhoneCard key={id} name={name} id={id} />)
    )
}

export default PhoneList