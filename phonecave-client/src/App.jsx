import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import API_URL from './apiConfig';
import { Button, Container, Flex, Loader, Popover, Text } from '@mantine/core';

function App() {
	const [phones, setPhones] = useState(null);
	const [loading, setLoading] = useState(true);

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
			} /* finally {
				setLoading(false);
				console.log(loading);
			} */
		};

		getPhones();
	}, []);

	console.log('phones: ', phones);

	return (
		<Container>
			{loading === true && <Loader />}
			{phones && (
				<Flex
					mih={50}
					gap="md"
					justify="center"
					/* align="center" */
					direction="row"
					wrap="wrap"
				>
					<section>
						{phones.map((phone) => (
							<Popover
								m={'sm'}
								key={phone.id}
								width={200}
								position="bottom"
								withArrow
								shadow="md"
							>
								<Popover.Target>
									<Button>{phone.name}</Button>
								</Popover.Target>
								<Popover.Dropdown>
									<Text size="sm">
										Name: {phone.name}
										Manufacturer: {phone.manufacturer}
										{phone.description}
										Color: {phone.color}
										Price: {phone.price}€ Screen: {phone.screen}
										Processor: {phone.processor}
										Ram: {phone.ram}
									</Text>
								</Popover.Dropdown>
							</Popover>
						))}
					</section>
				</Flex>
			)}
		</Container>
	);
}

export default App;
