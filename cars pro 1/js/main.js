// العناصر الرئيسية في الصفحة
const searchInput = document.getElementById('searchInput');
const yearFilter = document.getElementById('yearFilter');
const typeFilter = document.getElementById('typeFilter');
const carsContainer = document.getElementById('carsContainer');
const sortSelect = document.getElementById('sortSelect');
const resultCount = document.getElementById('resultCount');
const brandFilter = document.getElementById('brandFilter');

// دالة لعرض السيارات في الصفحة
function displayCars(cars) {
    carsContainer.innerHTML = '';
    resultCount.textContent = cars.length;

    cars.forEach(car => {
        const features = car.features.map(feature => 
            `<span class="feature-tag">${feature}</span>`
        ).join('');
        
        const carCard = `
            <div class="car-card">
                <img src="${car.image}" alt="${car.brand} ${car.name}">
                <div class="car-info">
                    <h3>${car.brand} ${car.name}</h3>
                    <p class="car-type">${car.type}</p>
                    <p class="car-year">${car.year}</p>
                    <div class="features-list">${features}</div>
                    <p class="price">$${car.price.toLocaleString()}</p>
                    <button class="details-btn">View Details</button>
                </div>
            </div>
        `;
        carsContainer.innerHTML += carCard;
    });
}

// دالة لترتيب السيارات
function sortCars(cars, sortBy) {
    switch(sortBy) {
        case 'priceAsc':
            return [...cars].sort((a, b) => a.price - b.price);
        case 'priceDesc':
            return [...cars].sort((a, b) => b.price - a.price);
        case 'yearDesc':
            return [...cars].sort((a, b) => b.year - a.year);
        case 'yearAsc':
            return [...cars].sort((a, b) => a.year - b.year);
        default:
            return cars;
    }
}

// دالة بتجيب كل الماركات المتاحة
function getAvailableBrands() {
    return [...new Set(carsData.map(car => car.brand))].sort();
}

// دالة بتجيب كل السنين المتاحة
function getAvailableYears() {
    return [...new Set(carsData.map(car => car.year))].sort((a, b) => b - a);
}

// دالة بتملى الفلاتر بالاوبشنز المتاحة
function populateFilters() {
    const brands = getAvailableBrands();
    const years = getAvailableYears();
    
    // نملى فلتر الماركات
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
    
    // نملى فلتر السنين
    yearFilter.innerHTML = '<option value="">All Years</option>';
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// تحسين دالة الفلترة
function filterCars() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedYear = yearFilter.value;
    const selectedType = typeFilter.value;
    const selectedBrand = brandFilter.value;

    const filteredCars = carsData.filter(car => {
        const matchesBrand = !selectedBrand || car.brand === selectedBrand;
        const matchesYear = !selectedYear || car.year.toString() === selectedYear;
        const matchesType = !selectedType || car.type === selectedType;
        const matchesSearch = `${car.brand} ${car.name}`.toLowerCase().includes(searchTerm);
        
        return matchesSearch && matchesYear && matchesType && matchesBrand;
    });

    const sortedCars = sortCars(filteredCars, sortSelect.value);
    displayCars(sortedCars);
}

// إضافة مستمعي الأحداث
searchInput.addEventListener('input', filterCars);
yearFilter.addEventListener('change', filterCars);
typeFilter.addEventListener('change', filterCars);
sortSelect.addEventListener('change', filterCars);
brandFilter.addEventListener('change', filterCars);

// بنشغل الفلاتر اول ما الصفحة تحمل
document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    filterCars();
});
