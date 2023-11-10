import { useEffect, useState } from 'react'
import { Loader, Grid, GridCol} from "@mantine/core"
import axios from "axios";
import PhoneCard from './components/PhoneCard';

function Homepage() {
    const [phones, setPhones] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    const getAllPhones = () => {
      axios.get(`${import.meta.env.VITE_API_URL}/phones`)
      .then((response) => {
        setPhones(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  
    useEffect(() => {
      getAllPhones()
    }, [])

    return  isLoading ? (
      <>
        <Loader color="#288BE2" />
      </>
    ) : (
      <>
        <h1>The best phones:</h1>
        <Grid gutter="lg" spacing="lg">
            {phones && phones.map((phone) => {
              return(
                <GridCol key={phone.id} span={{ base: 12, xs: 4, md: 4, lg: 4 }}>
                  <PhoneCard phoneData={phone} /> 
                </GridCol>
              )})}
        </Grid>
      </>
    )
}

export default Homepage;