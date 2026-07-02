# Car Dealership Website

## Overview
This project is a functional car listing website that allows users to view, search, and filter cars based on various criteria such as year, type, and brand. The website is designed to be clean, professional, and beginner-friendly, making it easy to understand and modify.

## Features
- Display cars from different years, types, and brands (e.g., SUV, sedan, truck).
- Search functionality to find cars by keywords.
- Filter options to narrow down the car listings by:
  - Year
  - Type/Body
  - Brand
- Sort cars by price (low to high, high to low).
- Car details page/modal for more information on selected cars.
- Contact or booking section for user inquiries.

## Project Structure
```
car-dealership
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── main.css
│   │   │   └── styles.css
│   │   └── js
│   │       ├── filters.js
│   │       ├── search.js
│   │       └── main.js
│   ├── data
│   │   └── cars.json
│   ├── pages
│   │   ├── index.html
│   │   ├── car-details.html
│   │   └── contact.html
│   ├── components
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── car-card.html
│   └── server
│       ├── app.js
│       └── routes.js
├── package.json
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running:
   ```
   npm install
   ```
4. Start the server with:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the website.

## Notes
- The project is structured to allow easy modifications and additions.
- Code comments are included throughout the JavaScript files to help you understand the functionality.
- Feel free to explore and edit the HTML, CSS, and JavaScript files to customize the website further.