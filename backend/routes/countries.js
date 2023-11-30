const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:country', async (req, res) => {
    try {
        const country = req.params.country;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json({message: error.response.data.message});
        } else {
            res.status(500).json({message: 'Error fetching country data'});
        }
    }
});

module.exports = router;
