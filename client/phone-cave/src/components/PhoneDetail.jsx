import { useEffect, useState } from "react";
import axios from "axios";
import { Group, Image, Loader, Stack, Text, Title, rem } from "@mantine/core";

const PhoneDetail = ({ selectedPhoneId }) => {
  console.log(selectedPhoneId);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneDetail, setPhoneDetail] = useState({});

  const fetchPhoneDetails = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/phones/${selectedPhoneId}`
      );
      console.log(response);
      if (response.status === 200) {
        setPhoneDetail(response.data[0]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error while fetching phone details");
    }
  };

  useEffect(() => {
    fetchPhoneDetails();
  }, [selectedPhoneId]);

  return (
    <>
      {selectedPhoneId !== null ? (
        isLoading ? (
          <Loader color="blue" />
        ) : (
          <Group justify="center">
            <Image
              h={rem(300)}
              fit="contain"
              src={`${phoneDetail.imageFileName}`}
            ></Image>
            <Stack w={rem(700)}>
              <Title order={2}>{phoneDetail.name}</Title>
              <Text>{phoneDetail.description}</Text>
              <Text>
                <strong>Manufacturer:</strong> {phoneDetail.manufacturer}
              </Text>
              <Text>
                <strong>Color:</strong> {phoneDetail.color}
              </Text>
              <Text>
                <strong>Price:</strong> {phoneDetail.price}€
              </Text>
              <Text>
                <strong>Screen:</strong> {phoneDetail.screen}
              </Text>
              <Text>
                <strong>Processor:</strong> {phoneDetail.processor}
              </Text>
              <Text>
                <strong>Ram:</strong> {phoneDetail.ram}
              </Text>
            </Stack>
          </Group>
        )
      ) : (
        <Title order={2}>No phone selected</Title>
      )}
    </>
  );
};

export default PhoneDetail;
