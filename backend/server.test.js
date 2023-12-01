const request = require('supertest');
const express = require('express');
const app = require('./server.js'); // path to your server.js file

describe('GET /api/countries/:country', function () {
    it('responds with json', function (done) {
        const country = 'usa'; // replace with a valid country name
        request(app)
            .get(`/api/countries/${country}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});