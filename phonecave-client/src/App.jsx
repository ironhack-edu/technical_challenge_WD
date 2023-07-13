import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import API_URL from './apiConfig';

function App() {
	const [phones, setPhones] = useState(null);
	const [loading, setLoading] = useState(true);

	const getPhones = async () => {
		try {
			const response = await axios.get(`${API_URL}/phones`);
			console.log('response.data: ', response.data);
			setPhones(response.data);
			setLoading(false);
		} catch (error) {
			console.error('Error getting list of phones:', error);
		}
	};

	useEffect(() => {
		getPhones();
	}, []);

	/* getPhones(); */

	console.log('phones: ', phones);

	return (
		<>
			{loading && <div>Loading...</div>}
			{phones && (
				<section>
					{phones.map((phone) => {
						<div key={phone.id}>Phone: {phone.name}</div>;
					})}
				</section>
			)}
		</>
	);
}

export default App;
