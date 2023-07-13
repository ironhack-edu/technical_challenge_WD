import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import API_URL from './apiConfig';
import {
	Button,
	Container,
	Flex,
	Group,
	Image,
	Loader,
	Text,
	Box,
	Collapse,
} from '@mantine/core';

function App() {
	const [phones, setPhones] = useState(null);
	const [loading, setLoading] = useState(true);
	const [openedIndex, setOpenedIndex] = useState(null);

	useEffect(() => {
		const getPhones = async () => {
			try {
				setLoading(true);
				console.log(loading);
				const response = await axios.get(`${API_URL}/phones`);
				setPhones(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Error getting list of phones:', error);
			}
		};

		getPhones();
	}, []);

	console.log('phones: ', phones);

	return (
		<Container>
			{loading === true && <Loader />}

			{phones && (
				<Flex mih={50} gap="md" justify="center" direction="row" wrap="wrap">
					<section>
						{phones.map((phone, index) => (
							<Box maw={400} mx="auto" key={phone.id}>
								<Group position="center" mb={5}>
									<Button
										onClick={() =>
											setOpenedIndex(openedIndex === index ? null : index)
										}
									>
										{phone.name}
									</Button>
								</Group>

								<Collapse in={openedIndex === index}>
									<Text>
										<Image
											maw={240}
											mx="auto"
											radius="md"
											src={'./images/' + phone.imageFileName}
											alt="Random image"
										/>
										<p>Name: {phone.name}</p>
										<p>Manufacturer: {phone.manufacturer}</p>
										<p>{phone.description}</p>
										<p>Color: {phone.color}</p>
										<p>
											Price: {phone.price}€ Screen: {phone.screen}
										</p>
										<p>Processor: {phone.processor}</p>
										<p>Ram: {phone.ram}</p>
									</Text>
								</Collapse>
							</Box>
						))}
					</section>
				</Flex>
			)}
		</Container>
	);
}

export default App;
