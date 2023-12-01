const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const fs = require('fs');
const cors = require('cors')

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(cors())

// Read phones data from phones.json
const phonesData = JSON.parse(fs.readFileSync('../api/data/phones.json', 'utf-8'));

// Route to show all phones
app.get('/api/phones', (req, res) => {
  res.json(phonesData);
});

// Route to show phone details by ID
app.get('/api/phones/:id', (req, res) => {
  const { id } = req.params;
  const phone = phonesData.find((p) => p.id === parseInt(id));

  if (!phone) {
    return res.status(404).json({ error: 'Phone not found' });
  }

  res.json(phone);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});