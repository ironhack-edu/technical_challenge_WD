import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PhonesServices from "../services/phones.services";
import phonesServices from "../services/phones.services";

const DetailsPhone = () => {
    const { phone_id } = useParams();
    const [phoneData, setPhoneData] = useState(null);

    useEffect(() => {
        loadPhoneDetails();
    }, [phone_id]);

    const loadPhoneDetails = () => {
        PhonesServices.getAll()
            .then(({ data }) => {
                const foundPhone = data.find(element => element.id == phone_id);
                if (foundPhone) {
                    setPhoneData(foundPhone);
                } else {
                    console.log("Phone not found");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            {phoneData ? (
                <div>
                    <h1>{phoneData.name}</h1>
                    <p>{phoneData.description}</p>
                    <p>{phoneData.manufacterer}</p>
                    <p>{phoneData.price}</p>
                    <p>{phoneData.processor}</p>
                    <p>{phoneData.ram}</p>
                    <p>{phoneData.screen}</p>


                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailsPhone