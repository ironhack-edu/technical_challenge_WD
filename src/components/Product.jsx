import {
  Card,
  Heading,
  Image,
  Text,
  CardBody,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

function Product(props) {
  const data = props.data;
  const [detailsVisible, setDetailsVisible] = useState(false);
  function handleDetails() {
    setDetailsVisible(!detailsVisible);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        maxW="sm"
        key={data.id}
        className={detailsVisible ? 'show-details' : null}
      >
        <CardBody>
          <Image src={`./assets/images/${data.imageFileName}`} alt="name" />
          <Heading size="md">{data.name}</Heading>
          <Text>{data.description}</Text>
          <Button
            aria-label="show details on {name}"
            colorScheme="messenger"
            spinnerPlacement="end"
            size="lg"
            onClick={onOpen}
          >
            show details
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>{data.name}</ModalHeader>
          <ModalBody>
            <TableContainer>
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Th>Manufacturer:</Th>
                    <Td>manufacturer</Td>
                  </Tr>
                  <Tr>
                    <Th>Color</Th>
                    <Td>color</Td>
                  </Tr>
                  <Tr>
                    <Th>Price</Th>
                    <Td>price</Td>
                  </Tr>
                  <Tr>
                    <Th>Screen</Th>
                    <Td>screen</Td>
                  </Tr>
                  <Tr>
                    <Th>Processor</Th>
                    <Td>processor</Td>
                  </Tr>
                  <Tr>
                    <Th>RAM</Th>
                    <Td>ram</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Product;
