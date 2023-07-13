import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [phones, setPhones] = useState([]);
	const [loading, setLoading] = useState(true);

	const getPhones = async () => {
		try {
			const response = await axios.get('/phones');
			console.log('response.data: ', response.data);
			setPhones(response.data);
			setLoading(false);
		} catch (error) {
			console.error('Error gettng list of phones:', error);
		}
	};

	useEffect(() => {
		getPhones();
	}, []);

	return <>{loading && <div>Loading...</div>}</>;
}

export default App;
