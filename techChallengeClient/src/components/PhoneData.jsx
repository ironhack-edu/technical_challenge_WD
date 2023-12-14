import Button from 'react-bootstrap/Button';
import { useParams, Link } from "react-router-dom"

const PhoneData = ({ name, description, manufacterer, price, processor, ram, screen, id: phone_id }) => {
    return (

        <div className="PhoneData">
            <p>{name}</p>


            <Link to={`/${phone_id}`}><Button>See details!</Button></Link>

            <hr />
        </div>
    )
}
export default PhoneData