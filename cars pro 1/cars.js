// Sample data (expand as needed)
const carsData = [
  {
    brand: "Toyota",
    name: "Corolla",
    year: 2020,
    type: "Sedan",
    price: 18000,
    image: "https://source.unsplash.com/featured/?toyota,corolla",
    features: ["Automatic", "Air Conditioning", "Bluetooth"]
  },
  {
    brand: "Ford",
    name: "Mustang",
    year: 2022,
    type: "Coupe",
    price: 35000,
    image: "https://source.unsplash.com/featured/?ford,mustang",
    features: ["Manual", "Leather Seats", "Sport Mode"]
  },
  {
    brand: "Tesla",
    name: "Model 3",
    year: 2023,
    type: "Sedan",
    price: 45000,
    image: "https://source.unsplash.com/featured/?tesla,model3",
    features: ["Electric", "Autopilot", "Panoramic Roof"]
  }
  // ...add more cars as needed
];

// IIFE to avoid polluting global scope
(function() {
  // DOM elements
  const searchInput = document.getElementById('searchInput');
  const brandFilter = document.getElementById('brandFilter');
  const typeFilter = document.getElementById('typeFilter');
  const yearFilter = document.getElementById('yearFilter');
  const sortSelect = document.getElementById('sortSelect');
  const carsContainer = document.getElementById('carsContainer');
  const resultCount = document.getElementById('resultCount');

  // Utility: Format price with commas
  function formatPrice(price) {
    return '$' + price.toLocaleString();
  }

  // Populate filter dropdowns dynamically
  function populateFilters() {
    // Helper to get unique sorted values
    function getUniqueSorted(arr, key) {
      return [...new Set(arr.map(item => item[key]))].sort((a, b) => {
        if (typeof a === 'number') return b - a; // Descending for years
        return a.localeCompare(b);
      });
    }

    // Brand
    const brands = getUniqueSorted(carsData, 'brand');
    brandFilter.innerHTML = '<option value="">All Brands</option>' +
      brands.map(b => `<option value="${b}">${b}</option>`).join('');

    // Type
    const types = getUniqueSorted(carsData, 'type');
    typeFilter.innerHTML = '<option value="">All Types</option>' +
      types.map(t => `<option value="${t}">${t}</option>`).join('');

    // Year
    const years = getUniqueSorted(carsData, 'year');
    yearFilter.innerHTML = '<option value="">All Years</option>' +
      years.map(y => `<option value="${y}">${y}</option>`).join('');
  }

  // Filtering logic
  function filterCars(data) {
    const search = searchInput.value.trim().toLowerCase();
    const brand = brandFilter.value;
    const type = typeFilter.value;
    const year = yearFilter.value;

    return data.filter(car => {
      // Search by brand or name
      const matchesSearch =
        car.brand.toLowerCase().includes(search) ||
        car.name.toLowerCase().includes(search);

      // Filter by brand
      const matchesBrand = !brand || car.brand === brand;

      // Filter by type
      const matchesType = !type || car.type === type;

      // Filter by year
      const matchesYear = !year || car.year.toString() === year;

      return matchesSearch && matchesBrand && matchesType && matchesYear;
    });
  }

  // Sorting logic
  function sortCars(data) {
    const sort = sortSelect.value;
    const sorted = [...data];
    switch (sort) {
      case 'priceAsc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'yearAsc':
        sorted.sort((a, b) => a.year - b.year);
        break;
      case 'yearDesc':
        sorted.sort((a, b) => b.year - a.year);
        break;
      default:
        // No sorting
        break;
    }
    return sorted;
  }

  // Render car cards
  function displayCars(data) {
    carsContainer.innerHTML = '';
    if (data.length === 0) {
      carsContainer.innerHTML = `<div style="grid-column: 1/-1; text-align:center; color:#888; font-size:1.2rem;">No cars match your search.</div>`;
      resultCount.textContent = '0 results';
      return;
    }
    const cards = data.map(car => `
      <div class="car-card">
        <img src="${car.image}" alt="${car.brand} ${car.name}">
        <div class="car-info">
          <h3>${car.brand} ${car.name}</h3>
          <div class="car-type">${car.type}</div>
          <div class="car-year">${car.year}</div>
          <div class="features-list">
            ${car.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
          </div>
          <div class="price">${formatPrice(car.price)}</div>
          <button class="details-btn">View Details</button>
        </div>
      </div>
    `).join('');
    carsContainer.innerHTML = cards;
    resultCount.textContent = `${data.length} result${data.length > 1 ? 's' : ''}`;
  }

  // Combined logic: filter, sort, display
  function updateCars() {
    let filtered = filterCars(carsData);
    let sorted = sortCars(filtered);
    displayCars(sorted);
  }

  // Event listeners
  searchInput.addEventListener('input', updateCars);
  brandFilter.addEventListener('change', updateCars);
  typeFilter.addEventListener('change', updateCars);
  yearFilter.addEventListener('change', updateCars);
  sortSelect.addEventListener('change', updateCars);

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    updateCars();
  });
})();

document.addEventListener('DOMContentLoaded', function() {
  fetch('cars.json')
    .then(response => response.json())
    .then(cars => {
      const container = document.getElementById('cars-container');
      container.innerHTML = cars.map(car => `
        <div style="border:1px solid #ccc; margin:10px; padding:10px; display:inline-block; width:220px; vertical-align:top;">
          <img src="${car.image}" alt="${car.make} ${car.model}" style="width:200px; height:120px; object-fit:cover;">
          <h3>${car.make} ${car.model}</h3>
          <p>Year: ${car.year}</p>
        </div>
      `).join('');
    });
});
