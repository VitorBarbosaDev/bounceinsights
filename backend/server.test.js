const request = require('supertest');
const app = require('./server.js'); // path to your server.js file

// Array of test cases
const testCases = [
    {country: 'usa', status: 200, hasData: true},
    {country: 'uk', status: 200, hasData: true},
    {country: 'nonexistentcountry', status: 404, hasData: false},
    // Add more test cases as needed
];

// Loop through test cases
testCases.forEach(({country, status, hasData}) => {
    describe(`GET /api/countries/${country}`, function () {
        it(`responds with ${status}`, function (done) {
            request(app)
                .get(`/api/countries/${country}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(status)
                .then(response => {
                    // Check if the response has data
                    if (hasData) {
                        expect(response.body[0]).toHaveProperty('name'); // Check the first element of the response.body array
                        expect(response.body[0]).toHaveProperty('capital'); // Check the first element of the response.body array
                        // Add more checks as needed
                    } else {
                        expect(response.body).toEqual({message: 'Not Found'}); // Expect the error message
                    }
                    done();
                })
                .catch(err => done(err));
        });
    });
});