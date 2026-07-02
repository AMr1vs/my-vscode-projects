// This file serves as the entry point for the JavaScript code, initializing the application and setting up event listeners.

// Function to initialize the application
function init() {
    // Set up event listeners for search and filter functionality
    setupEventListeners();
}

// Function to set up event listeners
function setupEventListeners() {
    // Example: Add event listener for search input
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', handleSearch);

    // Example: Add event listeners for filter options
    const filterYear = document.getElementById('filter-year');
    filterYear.addEventListener('change', handleFilter);

    const filterType = document.getElementById('filter-type');
    filterType.addEventListener('change', handleFilter);

    const filterBrand = document.getElementById('filter-brand');
    filterBrand.addEventListener('change', handleFilter);
}

// Function to handle search input
function handleSearch(event) {
    const query = event.target.value;
    // Call search function from search.js
    searchCars(query);
}

// Function to handle filter changes
function handleFilter() {
    // Call filter function from filters.js
    filterCars();
}

// Call the init function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);