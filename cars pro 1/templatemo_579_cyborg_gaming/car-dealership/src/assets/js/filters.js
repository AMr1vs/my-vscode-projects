// This file implements the filtering functionality for cars based on year, type, and brand.

const cars = []; // This will hold the car data

// Function to filter cars by year
function filterByYear(year) {
    return cars.filter(car => car.year === year);
}

// Function to filter cars by type
function filterByType(type) {
    return cars.filter(car => car.type === type);
}

// Function to filter cars by brand
function filterByBrand(brand) {
    return cars.filter(car => car.brand === brand);
}

// Function to sort cars by price
function sortByPrice(cars, order = 'asc') {
    return cars.sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
}

// Function to apply all filters
function applyFilters(year, type, brand, sortOrder) {
    let filteredCars = cars;

    if (year) {
        filteredCars = filterByYear(year);
    }
    if (type) {
        filteredCars = filterByType(type);
    }
    if (brand) {
        filteredCars = filterByBrand(brand);
    }
    if (sortOrder) {
        filteredCars = sortByPrice(filteredCars, sortOrder);
    }

    return filteredCars;
}

// Exporting the functions for use in other modules
export { applyFilters, filterByYear, filterByType, filterByBrand, sortByPrice };