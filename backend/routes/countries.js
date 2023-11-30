// Import necessary modules
const express = require('express');
const axios = require('axios');

// Initialize express router
const router = express.Router();

// Define route for getting country data
router.get('/:country', async (req, res) => {
    try {
        // Get country from request parameters
        const country = req.params.country;

        // Fetch country data from API
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);

        // Send the fetched data as response
        res.json(response.data);
    } catch (error) {
        // Handle errors
        if (error.response) {
            // If error response is available, send it as response
            res.status(error.response.status).json({message: error.response.data.message});
        } else {
            // If error response is not available, send a generic error message
            res.status(500).json({message: 'Error fetching country data'});
        }
    }
});

// Export the router
module.exports = router;