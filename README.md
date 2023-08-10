# The Phone Cave (WD)

  At The Phone Cave we are looking for someone to help us turn our cave store into a home, and to do so we present you this challenge.

## The challenge (Duration: 3 hours)

Your task consists of creating an app showing our catalog. Follow the steps detailed below to complete the task. **You have 3 hours to do so.**

### Iteration #1

Create a REST API (NodeJS) server that meets the following requirements:


| Route                 | HTTP Verb | Description    |
| --------------------- | --------- | -------------- |
| `/phones`             | GET       | Show all phones (use the `phones.json`) as fake data |
| `/phones/:id`         | GET       | Show a phone details|


### Iteration #2

Create a React application that communicates with the API you created before. Your React app should be using the **hooks** approach.
- Use Axios (or a similar library) in order to obtain data from the REST API
- Show a list with all the phones
- When a phone model is selected from the list, a detailed view of the phone is shown with a few specific details displayed. This display should be on the same page than the list of phones. 
- Show a spinner component or a position marker while the API request is processing (display a simulation if there is no loading time)

### Iteration #3

Make it look **eye-appealing**. There is no need to develop a sophisticated design, but it should not look terrible when viewed from a phone. Add images of each device.

Once done with this, do a pull request to submit your work. 

# PhoneCave - Full Stack Phone Catalog App

PhoneCave is a full stack web application that allows users to browse and view details of various mobile phones. It consists of both a frontend built with React and a backend built with Node.js and Express.

## Features

- Browse a list of mobile phones with their names, manufacturers, colors, and prices.
- Click on a phone card to view detailed information about the phone.
- Responsive design to provide a seamless experience across different devices.

## Technologies Used

- Frontend: React, Axios, React Router, React Spinners
- Backend: Node.js, Express

## Installation

1. Clone the repository to your local machine.
2. Navigate to the `frontend` folder and run `npm install` to install frontend dependencies.
3. Navigate to the `backend` folder and run `npm install` to install backend dependencies.

## Usage

1. Start the backend server:
   - Navigate to the `backend` folder.
   - Run `npm start` to start the backend server on `http://localhost:5005`.

2. Start the frontend application:
   - Navigate to the `frontend` folder.
   - Run `npm start` to start the frontend application on `http://localhost:3000`.

3. Open your web browser and go to `http://localhost:3000` to use the PhoneCave app.
4. Browse the list of phones, click on a phone card to view its details, and enjoy exploring the catalog.

## Contributing

Contributions are welcome! Feel free to submit pull requests or raise issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deadline

You have three hours to work on this challenge.
In the event that after three hours you do not have the MVP objectives ready, send the pull request indistinctly. This is a speed challenge.

## Must-have Deliverables

- Functioning code (server and client side)
- Short README file describing what is the app about and add instructions on how to use it.
 
