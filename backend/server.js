const express = require('express');
const phoneRoutes = require('./routes/phoneRoutes');
const cors = require('cors');

const app = express();
const port = 5000;

// Use your API routes
app.use('/api', phoneRoutes);

app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Phone API!'); // You can customize this message.
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
