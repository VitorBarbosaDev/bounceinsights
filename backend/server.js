// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import the countries route
const countriesRoutes = require('./routes/countries');

// Initialize express app
const app = express();

// Use the port from environment variables or default to 5000
const port = process.env.PORT || 5000;

// Use cors and json middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '..', 'bouncrinsightsapp', 'build')));

// Use the countries route for /api/countries path
app.use('/api/countries', countriesRoutes);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '..', 'bouncrinsightsapp', 'build', 'index.html'));
});

// Start the server only when this module is not required by another module
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

// Export the express app
module.exports = app;