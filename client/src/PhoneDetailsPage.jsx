import { Loader } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhoneDetails() {
    const { id } = useParams();
    const [phone, setPhone] = useState();
    const [isLoading, setIsLoading] = useState(true);
    console.log(id)
    const getPhoneDetail = () => {
        console.log(`${import.meta.env.VITE_API_URL}/phones/${id}`)
        axios.get(`${import.meta.env.VITE_API_URL}/phones/${id}`)
        .then((response) => {
          setPhone(response.data)
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
      }

      useEffect(() => {
        getPhoneDetail()
      }, [])


      return  isLoading ? (
        <>
          <Loader color="#288BE2" />
        </>
      ) : (
        <>
          <h1>The best phones: {phone.name}</h1>
        </>
      )
}

export default PhoneDetails;