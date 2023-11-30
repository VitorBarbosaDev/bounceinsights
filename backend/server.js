// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');
const cors = require('cors');

// Import the countries route
const countriesRoutes = require('./routes/countries');

// Initialize express app
const app = express();

// Use the port from environment variables or default to 5000
const port = process.env.PORT || 5000;

// Use cors and json middleware
app.use(cors());
app.use(express.json());

// Use the countries route for /api/countries path
app.use('/api/countries', countriesRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});