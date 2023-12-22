import { useEffect, useState } from "react";
import axios from "axios";
import Popover from "../components/popover";
import { Card, Button, CardHeader, CardMedia} from '@mui/material';
import "./index.css"

function App() {
  const API = "http://localhost:5000/phones"

  const [phoneList, setPhoneList] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [loadingPhoneSimulation, setLoadingPhoneSimulation] = useState(true);
  const [phone, setPhone] = useState(null);
  const [blurryBackground, setBlurryBackground] = useState(false);

  useEffect(() => {
    getAllPhones()
  },[])

  const getAllPhones = async () => {
    const response = await axios.get(`${API}`)
    try {
      console.log(response.data);
      setPhoneList(response.data);
    } catch (error) {
      console.error(error)
    }finally{
      setTimeout(() => {
        setLoadingPage(false)
      }, 1000);
    }
  }

  const getPhone = async (id) => {
    const response = await axios.get(`${API}/${id}`)
    try {
      setPhone(response.data[0]);
      handleBlur();
    } catch (error) {
      console.error(error)
    }finally{
      setTimeout(() => {
        setLoadingPhoneSimulation(false)
      }, 1000);
    }

  }

  const handleBlur = () =>{
    setBlurryBackground(!blurryBackground);
  }


  return (
    <div>
      <h1 className="home-title">The Phone Cave</h1>
    <div id="main" className={blurryBackground ? "blurry" : ""}> 
      {loadingPage ? 
      <img className='loading' src="/loading.gif"/>
      :
      phoneList.map((phone, index)=>{
        return(
          <Card key={index} >
            <CardHeader title={phone.name} />
            <CardMedia>
              <img className="small-phone" src={`/${phone.imageFileName}`} alt={phone.name}/>
            </CardMedia>
            <Button fullWidth color="maincolor" variant="contained" onClick={() => getPhone(phone.id)}>Details</Button>
          </Card>
        )
      })
      }

    </div>
    {phone && 
    <Popover 
    handleBlur={handleBlur}
    phone={phone} 
    setPhone={setPhone} 
    loadingPhoneSimulation={loadingPhoneSimulation}
    setLoadingPhoneSimulation={setLoadingPhoneSimulation}
    />}
    </div>
  )
}

export default App