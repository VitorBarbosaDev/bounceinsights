import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function CountryCard({countryData}) {
    if (!countryData) return null;

    // Extract currency information
    const currencyInfo = countryData.currencies ? Object.entries(countryData.currencies).map(([code, {
        name,
        symbol
    }]) => `${name} (${symbol})`).join(', ') : 'No currency information';

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

function App() {
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [countryData, setCountryData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Search for a country..."
                />
                <button onClick={handleSubmit} className="search-button">Search</button>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
            {countryData && <CountryCard countryData={countryData}/>}
        </div>
    );
}

export default App;
