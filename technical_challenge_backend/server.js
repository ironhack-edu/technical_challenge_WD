const express = require('express');
const app = express();
const phonesData = require('./data/phones.json');
const cors = require('cors');

app.use(cors());

app.get('/phones', (req, res) => {
	res.json(phonesData);
});

app.get('/phones/:id', (req, res) => {
	const phoneId = parseInt(req.params.id, 10);
	const phone = phonesData.find((p) => p.id === phoneId);

	if (!phone) {
		return res.status(404).json({ error: 'Phone not found' });
	}

	res.json(phone);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
