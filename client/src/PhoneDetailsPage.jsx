import { Loader, Image, Text, Group, Badge, Paper } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhoneDetails() {
    const { id } = useParams();
    const [phone, setPhone] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const getPhoneDetail = () => {
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
          <h1>{phone.name}</h1>
          <Image
            src={`assets/images/${phone.imageFileName}`}
            fit='contain'
            height={250}
            width={250}
          />
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{phone.description}</Text>
          <Badge color="pink" variant="light">
            Price: {phone.price}€
          </Badge>
        </Group>
        <Paper>
            <Text>Made by: {phone.manufacturer}</Text>
            <Text>Specifications:</Text>
            <Text>Screen size: {phone.screen}</Text>
            <Text>Processor: {phone.processor}</Text>
            <Text>Ram: {phone.ram}</Text>
        </Paper>
        </>
      )
}

export default PhoneDetails;