Sure, here's the contents for the file: /car-dealership/car-dealership/src/server/app.js

const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../assets')));

// Use routes defined in routes.js
app.use('/api', routes);

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
});

app.get('/car-details', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/car-details.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/contact.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});