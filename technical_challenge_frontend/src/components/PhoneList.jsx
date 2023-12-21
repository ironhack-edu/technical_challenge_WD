import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_HOST from './config';
import '../OnePager.css';

const PhoneList = ({ onSelectPhone }) => {
	const [phones, setPhones] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${API_HOST}/phones`)
			.then((response) => {
				setPhones(response.data);
				setLoading(false);
			})
			.catch((err) => console.error('Error fetching data:', err));
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="phone-list">
			<h2>Phone List</h2>
			<ul>
				{phones.map((phone) => (
					<li
						key={phone.id}
						onClick={() => {
							onSelectPhone(phone.id);
						}}
					>
						{phone.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PhoneList;
