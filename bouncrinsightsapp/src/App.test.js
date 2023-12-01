import {render, screen} from '@testing-library/react';
import CountryCard from 'App.js'; 

test('renders country information', () => {
    const countryData = {
        name: {common: 'Test Country'},
        capital: 'Test Capital',
        population: 123456,
        flags: {png: 'test.png'},
        languages: {eng: 'English'},
        currencies: {usd: {name: 'United States dollar', symbol: '$'}}
    };
    render(<CountryCard countryData={countryData}/>);
    expect(screen.getByText(/Test Country/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Capital/i)).toBeInTheDocument();
    expect(screen.getByText(/123,456/i)).toBeInTheDocument();
    expect(screen.getByText(/English/i)).toBeInTheDocument();
    expect(screen.getByText(/United States dollar/i)).toBeInTheDocument();
});


import {render, screen, fireEvent} from '@testing-library/react';
import App from 'App.js'; 

test('updates state on input change', () => {
  render(<App/>);
  const inputElement = screen.getByPlaceholderText(/Search for a country.../i);
  fireEvent.change(inputElement, {target: {value: 'Test Country'}});
  expect(inputElement.value).toBe('Test Country');
});