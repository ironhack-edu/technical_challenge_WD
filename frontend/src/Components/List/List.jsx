import axios from 'axios'
import './listStyle.css'
import { useEffect, useState } from 'react'
import Spinner from '../Spinner';
const backendUrl = "http://localhost:3400";

export default function List({setChosenPhoneId}){
    const [phoneList, setPhoneList] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        async function startUp(){
            try{
                setLoading(true)
                const response = await axios.get(backendUrl+"/phones")
                setPhoneList(response.data)
                setLoading(false)

            }
            catch(err){
                console.log(err);
            }
        }
        startUp()
    }, [])
    return (
        <>
        {loading && <Spinner />}

         <div id="list-container">
            {phoneList && (
                phoneList.map((entry, i)=>{
                    return (
                        <div className="list-entry" key={i}>
                            <button onClick={()=>setChosenPhoneId(entry.id)}>{entry.name}</button>
                        </div>
                    )
                })
            )}
        </div>       
        </>

    )
}
