import React, { useState } from 'react';
import './App.css';
import PhoneDetail from './components/PhoneDetail';
import PhoneList from './components/PhoneList';

function App() {
	const [selectedPhone, setSelectedPhone] = useState(null);

	const handleSelectedPhone = (phoneId) => {
		setSelectedPhone(phoneId);
	};

	return (
		<div className="App">
			<PhoneList onSelectPhone={handleSelectedPhone} />
			{selectedPhone !== null && <PhoneDetail phoneId={selectedPhone} />}
		</div>
	);
}

export default App;
