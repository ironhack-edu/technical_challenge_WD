// Import the express library to create and manage the server
const express = require('express');

// Import the 'cors' middleware to handle Cross-Origin Resource Sharing, 
// allowing our API to respond to requests from different origins.
const cors = require('cors');


// Import (or "require") the phones.json file, which contains our phone data. In Node.js, JSON files can be directly required, and they are automatically parsed into JavaScript objects.
const phonesData = require('./data/phones.json');

// Create an instance of an Express application.
const app = express();

// Add the cors middleware to our Express application. This will add the
// necessary headers to responses to handle CORS, allowing browsers to 
// make requests to our server from different origins (like our React app).
app.use(cors());

// Define the port number our server will listen on.
const PORT = 3000;

// Use express.json middleware to automatically parse incoming JSON in request bodies (though it's not strictly necessary for our current routes, it's a common practice for APIs to handle JSON).
app.use(express.json());

// Define a route that handles GET requests to "/phones". This route will return the list of all phones.
app.get('/phones', (req, res) => {
    // Send the phonesData as a JSON response.
    res.json(phonesData);
});

// Define a route that handles GET requests to "/phones/:id", where ":id" is a placeholder for the actual phone ID provided in the URL.
app.get('/phones/:id', (req, res) => {
    // Extract the "id" parameter from the URL using req.params.
    const phoneId = req.params.id;
    
    // Use the "find" method to locate a phone in the phonesData array whose "id" matches the "id" from the URL.
    const phone = phonesData.find(p => p.id == phoneId);

    // If the "find" method didn't find a match (i.e., phone is undefined), respond with a 404 status code and a message.
    if (!phone) {
        return res.status(404).send({ message: 'Phone not found.' });
    }

    // If a matching phone was found, send it as a JSON response.
    res.json(phone);
});

// Start the server, making it listen for requests on the specified PORT. Once the server is ready, the provided callback function is executed.
app.listen(PORT, () => {
    // Log a message to the console to indicate where the server is running.
    console.log(`Server is running on http://localhost:${PORT}`);
});
