# Bounce Insights Coding Challenge

This project is a simple country information app built with React and Node.js. It allows users to search for a country
and displays information about the country, such as the capital, population, languages, and currencies.

## Introduction

The Bounce Insights Coding Challenge is designed to test the abilities in full-stack development, focusing on creating a
user-friendly interface for country data retrieval. This project demonstrates skills in both frontend and backend
development, providing a seamless experience for users to access global country data.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js with Express
- **Testing**: Jest, Supertest (backend testing), React Testing Library (frontend testing)
- **Styling**: CSS, Bootstrap

## Features

- **Country Search**: Users can search for any country and retrieve relevant data.
- **Data Display**: The app displays the country's name, capital, population, languages, and currency.
- **Responsive Design**: Built with a mobile-first approach, ensuring accessibility on various devices.

## Screenshots

*Include a few screenshots of your application here.*

## Installation

Before you start, make sure you have Node.js and npm installed on your machine.

1. Clone this repository: `git clone https://github.com/VitorBarbosaDev/bounceinsights`
2. Navigate into the project directory: `cd bouncrinsightsapp`
3. Install the dependencies: `npm install`
4. Navigate into the project directory: `cd bounceinsights/backend`
5. Install the dependencies: `npm install`

## Usage

To run the project locally, follow these steps:

1. Start the server: `node backend/server.js`
2. In a new terminal window, start the client: `npm start`

The application should now be running at `http://localhost:3000`.

## Components

- `App`: The main component of the application handling state and core functionality.
- `CountryCard`: Displays country data received as a prop.

## Testing

To run the tests, use the following command: `npm test`

This will run both the frontend tests in `App.test.js` and the backend tests in `server.test.js`.

## Environment Setup

## Configuration

The application can be configured with the following environment variables:

- `PORT`: The port number on which the backend server will listen (default: `5000`).
- `PUBLIC_API_URL`: The URL of the public API endpoint used by the frontend (default:
  REST_COUNTRIES_API=`https://restcountries.com/v3.1/name/`).


## Deployment

*https://find-countries-info-a57788798e99.herokuapp.com/*



## Acknowledgments

*Credits to any third-party assets used or shoutouts to contributors.*

## Future Enhancements

- **Enhanced Search Functionality**: Adding filters and more search options.
- **More Detailed Country Information**: Displaying additional data such as maps and economic data.
