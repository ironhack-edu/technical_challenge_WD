import { useEffect, useState } from "react";
import phoneService from "../services/phone.services";
import PhoneList from "../components/PhoneList";
import Loader from "../components/Loader/Loader";

const IndexPage = () => {
    const [phones, setPhones] = useState();

    const loadPhones = () => {
        phoneService.getPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        loadPhones();
    }, []);

    return (
        <div className="IndexPage">
            {!phones
                ? <Loader />
                : <PhoneList phones={phones} />}
        </div>
    );
}

export default IndexPage;