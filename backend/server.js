require('dotenv').config();
const express = require('express');
const cors = require('cors');
const countriesRoutes = require('./routes/countries'); // Import the new route

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

app.use(cors());
app.use(express.json());
app.use('/api/countries', countriesRoutes); // Use the imported routes

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
