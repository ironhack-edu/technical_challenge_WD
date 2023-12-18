import { useEffect, useState } from 'react'
import './displayStyle.css'
import axios from 'axios'
import Spinner from '../Spinner';
const backendUrl = "http://localhost:3400";



export default function Display({chosenPhoneId}){
    const [phoneData, setPhoneData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function startUp(){
            try{
                setLoading(true)
                const response = await axios.get(backendUrl+"/phones/" + chosenPhoneId);
                setPhoneData(response.data)
                setLoading(false)

            }
            catch(err){
                console.log(err);
            }
        }
        startUp()
    }, [chosenPhoneId])
    return (
        <>
        {loading && <Spinner />}
        <div id="display-container">
            {phoneData!==null && (
                <>
                    <div className='d-name'>
                    <span>{phoneData.manufacturer} </span>
                        {phoneData.name}

                        </div>
                    <div className='d-image'>
                        <img src={"../../../public/assets/images/"+phoneData.imageFileName} />
                    </div>
                    <div className="d-color-div">
                        <div className='d-label'>Color </div>
                        <div className="d-disp-color" style={{backgroundColor: phoneData.color}}></div>
                    </div>
                    <div className="d-description">{phoneData.description}</div>
                </>

            )}
        </div>
        </>

    )
}