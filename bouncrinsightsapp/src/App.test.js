import {render, screen, fireEvent} from '@testing-library/react';
import App from './App.js';
import axios from 'axios';

// Mock axios module
jest.mock('axios');

// Test to check if the country information is rendered correctly
test('renders country information', async () => {
    // Define country data
    const countryData = {
        name: {common: 'Test Country'},
        capital: 'Test Capital',
        population: 123456,
        flags: {png: 'test.png'},
        languages: {eng: 'English'},
        currencies: {usd: {name: 'United States dollar', symbol: '$'}}
    };

    // Mock axios.get to return a resolved promise with the country data
    axios.get.mockResolvedValue({data: [countryData]});

    // Render App component
    render(<App/>);

    // Simulate user typing a country name into the search input
    fireEvent.change(screen.getByPlaceholderText(/Search for a country.../i), {target: {value: 'Test Country'}});

    // Simulate user clicking the search button
    fireEvent.click(screen.getByText(/Search/i));

    // Wait for the country data to be rendered
    const countryName = await screen.findByText(/Test Country/i);
    expect(countryName).toBeInTheDocument();
});

// Test to check if the error message is rendered when API request fails
test('renders error message when API request fails', async () => {
    // Mock axios.get to return a rejected promise
    axios.get.mockRejectedValue(new Error('Failed to fetch country data'));

    // Render App component
    render(<App/>);

    // Simulate user typing a country name into the search input
    fireEvent.change(screen.getByPlaceholderText(/Search for a country.../i), {target: {value: 'Test Country'}});

    // Simulate user clicking the search button
    fireEvent.click(screen.getByText(/Search/i));

    // Wait for the error message to be rendered
    const errorMessage = await screen.findByText(/Failed to fetch country data/i);
    expect(errorMessage).toBeInTheDocument();
});

// Test to check if the loading message is rendered while API request is in progress
test('renders loading message while API request is in progress', () => {
    // Mock axios.get to return a promise that never resolves
    const promise = new Promise(() => {
    });
    axios.get.mockReturnValue(promise);

    // Render App component
    render(<App/>);

    // Simulate user typing a country name into the search input
    fireEvent.change(screen.getByPlaceholderText(/Search for a country.../i), {target: {value: 'Test Country'}});

    // Simulate user clicking the search button
    fireEvent.click(screen.getByText(/Search/i));

    // Check if the loading message is rendered
    const loadingMessage = screen.getByText(/Loading.../i);
    expect(loadingMessage).toBeInTheDocument();
});

// Test to check if the error message is rendered when search button is clicked without entering a country name
test('renders error message when search button is clicked without entering a country name', () => {
    // Render App component
    render(<App/>);

    // Simulate user clicking the search button without entering a country name
    fireEvent.click(screen.getByText(/Search/i));

    // Check if the error message is rendered
    const errorMessage = screen.getByText(/Please enter a country name./i);
    expect(errorMessage).toBeInTheDocument();
});

// Test to check if the state updates on input change
test('updates state on input change', () => {
    render(<App/>);
    const inputElement = screen.getByPlaceholderText(/Search for a country.../i);
    fireEvent.change(inputElement, {target: {value: 'Test Country'}});
    expect(inputElement.value).toBe('Test Country');
});