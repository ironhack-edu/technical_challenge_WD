import { useEffect, useState } from "react";
import axios from "axios";
import { Center, Grid, Image, Loader, Paper, Title, rem } from "@mantine/core";

const PhoneList = ({ setSelectedPhoneId }) => {
  const [phoneList, setPhoneList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPhoneList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/phones");
      console.log(response);
      if (response.status === 200) {
        setPhoneList(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error while fetching all phones list");
    }
  };

  useEffect(() => {
    fetchPhoneList();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader color="blue" />
      ) : (
        <Grid p={rem(20)}>
          {phoneList.map((currentPhone) => {
            return (
              <Grid.Col
                span={{ base: 12, sm: 6, md: 4, lg: 3 }}
                key={currentPhone.id}
              >
                <Paper
                  h={rem(450)}
                  onClick={() => setSelectedPhoneId(currentPhone.id)}
                >
                  <Image h={rem(400)} src={`${currentPhone.imageFileName}`} />
                  <Center>
                    <Title order={3}>{currentPhone.name}</Title>
                  </Center>
                </Paper>
              </Grid.Col>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default PhoneList;
