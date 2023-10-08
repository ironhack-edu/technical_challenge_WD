# Phone Catalog App

The Phone Catalog App is a web application built with React.js that allows users to explore a catalog of phones. It provides detailed information about various phone models, including their specifications and images. Users can view a list of phones, click on a phone to see its details, and learn more about different phone models available in the market.

## Features

- **Phone List**: Display a list of phones.
- **Phone Detail**: View more details about the selected phone.

## Frontend Routes

- **Home `/`**: Displays the list of phones and show details about them.

## Backend Routes

| Route                 | HTTP Verb | Description    |
| --------------------- | --------- | -------------- |
| `/phones`             | GET       | Show all phones |
| `/phones/:id`         | GET       | Show a phone details|
## Technologies Used

- **React.js**: A JavaScript library for building user interfaces, providing a smooth and responsive user experience.
- **Axios**: A popular JavaScript library for making HTTP requests, used to fetch phone data from the server.
- **Node.js**: A JavaScript runtime for server-side development, powering the backend server.
- **Express.js**: A minimal and flexible Node.js web application framework, used for routing and handling API requests.
- **JSON**: Data format used to store phone information.
