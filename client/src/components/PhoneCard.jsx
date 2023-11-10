import {
  Card,
  GridCol,
  Text,
  Image,
  Badge,
  Button,
  Group,
} from "@mantine/core";
import { useState } from "react";

function PhoneCard({phoneData}) {
  const [phone, setPhone] = useState(phoneData)
  return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={`assets/images/${phone.imageFileName}`}
            fit='contain'
            height={160}
            width={160}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{phone.name}</Text>
          <Badge color="pink" variant="light">
            Price: {phone.price}€
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
            Brand: {phone.manufacturer}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          More details
        </Button>
      </Card>
  );
}

export default PhoneCard;
