Sure, here's the contents for the file: /car-dealership/car-dealership/src/server/routes.js

const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load car data from JSON file
const loadCarsData = () => {
    const data = fs.readFileSync('./src/data/cars.json');
    return JSON.parse(data);
};

// Route to get all cars
router.get('/cars', (req, res) => {
    const cars = loadCarsData();
    res.json(cars);
});

// Route to get a car by ID
router.get('/cars/:id', (req, res) => {
    const cars = loadCarsData();
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).send('Car not found');
    res.json(car);
});

// Export the router
module.exports = router;