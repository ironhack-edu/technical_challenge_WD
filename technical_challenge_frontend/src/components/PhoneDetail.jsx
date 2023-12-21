// PhoneDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_HOST from './config';
import '../OnePager.css';

const PhoneDetail = ({ phoneId }) => {
	const [phone, setPhone] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${API_HOST}/phones/${phoneId}`)
			.then((response) => {
				setPhone(response.data);
				setLoading(false);
			})
			.catch((error) => console.error('Error fetching data:', error));
	}, [phoneId]);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="phone-detail">
			<h2>{phone.name}</h2>
			<p>Manufacturer: {phone.manufacturer}</p>
			<p>Description: {phone.description}</p>
			<p>Color: {phone.color}</p>
			<p>Price: ${phone.price}</p>
			<p>Screen: {phone.screen}</p>
			<p>Processor: {phone.processor}</p>
			<p>RAM: {phone.ram} GB</p>
		</div>
	);
};

export default PhoneDetail;
