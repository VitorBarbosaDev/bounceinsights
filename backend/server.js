const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/api/countries/:country', async (req, res) => {
    try {
        const country = req.params.country;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({message: 'Error fetching country data'});
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

