// Import necessary modules and styles
import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Define CountryCard component
function CountryCard({countryData}) {
    // If no country data is provided, don't render anything
    if (!countryData) return null;

    // Extract currency information from country data
    const currencyInfo = countryData.currencies ? Object.entries(countryData.currencies).map(([code, {
        name,
        symbol
    }]) => `${name} (${symbol})`).join(', ') : 'No currency information';

    // Render country information
    return (
        <div className="country-card">
            <h3>{countryData.name.common}</h3>
            <p>Capital: {countryData.capital}</p>
            <p>Population: {countryData.population.toLocaleString()}</p>
            <img src={countryData.flags.png} alt={`${countryData.name.common} flag`}/>
            <p>Languages: {Object.values(countryData.languages).join(', ')}</p>
            <p>Currency: {currencyInfo}</p> 
        </div>
    );
}


// Define App component
function App() {
    // Define state variables
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [countryData, setCountryData] = useState(null);

    // Define Submit function
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from being submitted in the default way
        if (!country.trim()) {
            setError('Please enter a country name.');
            return;
        }
        setIsLoading(true);
        setError('');
        try {
            const url = `https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages,currencies`;
            const response = await axios.get(url);
            setCountryData(response.data[0]);  // The API returns an array, so take the first element
        } catch (error) {
            setError('Failed to fetch country data');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="app-container">
            <form onSubmit={handleSubmit} className="search-bar"> 
                <input
                    type="text"
                    className="search-input"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Search for a country..."
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {isLoading && <p>Loading...</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
            {countryData && <CountryCard countryData={countryData}/>}
        </div>
    );
}

// Export App component
export default App;