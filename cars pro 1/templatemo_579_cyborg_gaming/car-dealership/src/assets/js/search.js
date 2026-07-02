// This file handles the search functionality, allowing users to search for cars by keywords.

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const carList = document.getElementById('car-list');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        filterCars(query);
    });

    function filterCars(query) {
        const cars = Array.from(carList.children);
        cars.forEach(car => {
            const carName = car.querySelector('.car-name').textContent.toLowerCase();
            if (carName.includes(query)) {
                car.style.display = 'block';
            } else {
                car.style.display = 'none';
            }
        });
    }
});