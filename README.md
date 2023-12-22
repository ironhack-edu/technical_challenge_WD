# The Phone Cave


## Description

Welcome to **The Phone Cave**, your guide to the latest phones!

- For the Web Development Technical Challenge, I've designed this app to show you a list of phones and their details.

## Instructions

To be able to run this on your computer, first clone the repo:

```
git clone <repo url>
```

Then run the following command to install all the required dependencies in both folders (frontend and backend):

```
npm install
```
To run and test the application, the command is (again in both frontend and backend folders):

```
npm run dev
```

## API Endpoints


| Route                 | HTTP Verb | Description    |
| --------------------- | --------- | -------------- |
| `/phones`             | GET       | Show all phones (use the `phones.json`) as fake data |
| `/phones/:id`         | GET       | Show a phone details|
