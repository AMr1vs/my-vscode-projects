// هنا الداتا بتاعة العربيات كلها
const cars = [
  // كل عربية عبارة عن اوبجكت فيه البيانات المطلوبة
  { id: 1, name: "Toyota Corolla", year: 2021, type: "Sedan", brand: "Toyota", price: 420000, img: "https://via.placeholder.com/400x170?text=Toyota+Corolla" },
  { id: 2, name: "BMW X5", year: 2023, type: "SUV", brand: "BMW", price: 1850000, img: "https://via.placeholder.com/400x170?text=BMW+X5" },
  { id: 3, name: "Mercedes C200", year: 2022, type: "Sedan", brand: "Mercedes", price: 1600000, img: "https://via.placeholder.com/400x170?text=Mercedes+C200" },
  { id: 4, name: "Kia Sportage", year: 2020, type: "SUV", brand: "Kia", price: 650000, img: "https://via.placeholder.com/400x170?text=Kia+Sportage" },
  { id: 5, name: "Hyundai Elantra", year: 2019, type: "Sedan", brand: "Hyundai", price: 370000, img: "https://via.placeholder.com/400x170?text=Hyundai+Elantra" },
  { id: 6, name: "Ford Ranger", year: 2024, type: "Pickup", brand: "Ford", price: 950000, img: "https://via.placeholder.com/400x170?text=Ford+Ranger" },
  { id: 7, name: "Chevrolet Malibu", year: 2018, type: "Sedan", brand: "Chevrolet", price: 330000, img: "https://via.placeholder.com/400x170?text=Chevrolet+Malibu" },
  { id: 8, name: "Honda Civic", year: 2021, type: "Sedan", brand: "Honda", price: 480000, img: "https://via.placeholder.com/400x170?text=Honda+Civic" },
  { id: 9, name: "Nissan Qashqai", year: 2022, type: "SUV", brand: "Nissan", price: 720000, img: "https://via.placeholder.com/400x170?text=Nissan+Qashqai" },
  { id: 10, name: "Mazda 3", year: 2017, type: "Hatchback", brand: "Mazda", price: 295000, img: "https://via.placeholder.com/400x170?text=Mazda+3" },
  { id: 11, name: "Volkswagen Golf", year: 2016, type: "Hatchback", brand: "Volkswagen", price: 310000, img: "https://via.placeholder.com/400x170?text=VW+Golf" },
  { id: 12, name: "Renault Duster", year: 2023, type: "SUV", brand: "Renault", price: 540000, img: "https://via.placeholder.com/400x170?text=Renault+Duster" },
  { id: 13, name: "Peugeot 508", year: 2021, type: "Sedan", brand: "Peugeot", price: 590000, img: "https://via.placeholder.com/400x170?text=Peugeot+508" },
  { id: 14, name: "Jeep Wrangler", year: 2025, type: "SUV", brand: "Jeep", price: 2100000, img: "https://via.placeholder.com/400x170?text=Jeep+Wrangler" },
  { id: 15, name: "Opel Astra", year: 2015, type: "Hatchback", brand: "Opel", price: 220000, img: "https://via.placeholder.com/400x170?text=Opel+Astra" },
  { id: 16, name: "Fiat Tipo", year: 2020, type: "Sedan", brand: "Fiat", price: 340000, img: "https://via.placeholder.com/400x170?text=Fiat+Tipo" },
  { id: 17, name: "Suzuki Swift", year: 2018, type: "Hatchback", brand: "Suzuki", price: 210000, img: "https://via.placeholder.com/400x170?text=Suzuki+Swift" },
  { id: 18, name: "Mitsubishi L200", year: 2024, type: "Pickup", brand: "Mitsubishi", price: 870000, img: "https://via.placeholder.com/400x170?text=Mitsubishi+L200" },
  { id: 19, name: "Chery Tiggo 7", year: 2022, type: "SUV", brand: "Chery", price: 430000, img: "https://via.placeholder.com/400x170?text=Chery+Tiggo+7" },
  { id: 20, name: "Seat Ibiza", year: 2019, type: "Hatchback", brand: "Seat", price: 260000, img: "https://via.placeholder.com/400x170?text=Seat+Ibiza" },
  { id: 21, name: "Audi A4", year: 2023, type: "Sedan", brand: "Audi", price: 1350000, img: "https://via.placeholder.com/400x170?text=Audi+A4" },
  { id: 22, name: "GMC Sierra", year: 2025, type: "Pickup", brand: "GMC", price: 1950000, img: "https://via.placeholder.com/400x170?text=GMC+Sierra" },
  { id: 23, name: "BYD F3", year: 2017, type: "Sedan", brand: "BYD", price: 170000, img: "https://via.placeholder.com/400x170?text=BYD+F3" },
];

// هنا بنجيب العناصر من الصفحة
const carList = document.getElementById('carList');
const searchBrand = document.getElementById('searchBrand');
const filterYear = document.getElementById('filterYear');
const filterType = document.getElementById('filterType');

// دي الفانكشن اللي بترندر العربيات في الصفحة
function renderCars(list) {
  carList.innerHTML = '';
  if (list.length === 0) {
    carList.innerHTML = '<p style="grid-column:1/-1;text-align:center;">مفيش عربيات بالمواصفات دي</p>';
    return;
  }
  list.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.setAttribute('data-id', car.id); // for click navigation
    card.innerHTML = `
      <img class="car-img" src="${car.img}" alt="${car.name}">
      <div class="car-info">
        <div class="car-title">${car.name}</div>
        <div class="car-meta">الماركة: ${car.brand}</div>
        <div class="car-meta">السنة: ${car.year}</div>
        <div class="car-meta">النوع: ${car.type}</div>
        <div class="car-price">${car.price.toLocaleString()} جنيه</div>
      </div>
    `;
    // Navigate to details page on click
    card.addEventListener('click', function() {
      window.location.href = `car-details.html?id=${car.id}`;
    });
    carList.appendChild(card);
  });
}

// دي الفانكشن اللي بتجيب كل السنين والأنواع وتحطهم في الفلاتر
function populateFilters() {
  // بنجيب كل السنين من الداتا
  const years = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a);
  years.forEach(year => {
    const opt = document.createElement('option');
    opt.value = year;
    opt.textContent = year;
    filterYear.appendChild(opt);
  });
  // بنجيب كل الأنواع
  const types = [...new Set(cars.map(car => car.type))];
  types.forEach(type => {
    const opt = document.createElement('option');
    opt.value = type;
    opt.textContent = type;
    filterType.appendChild(opt);
  });
}

// دي الفانكشن اللي بتفلتر العربيات حسب الماركة والسنة والنوع
function filterCars() {
  const brandVal = searchBrand.value.trim().toLowerCase();
  const yearVal = filterYear.value;
  const typeVal = filterType.value;

  // بنفلتر حسب كل الفلاتر
  const filtered = cars.filter(car => {
    // فلتر الماركة
    const matchBrand = car.brand.toLowerCase().includes(brandVal);
    // فلتر السنة
    const matchYear = yearVal === '' || car.year.toString() === yearVal;
    // فلتر النوع
    const matchType = typeVal === '' || car.type === typeVal;
    return matchBrand && matchYear && matchType;
  });
  renderCars(filtered);
}

// هنا بنربط الفلاتر بالفلترة
searchBrand.addEventListener('input', filterCars);
filterYear.addEventListener('change', filterCars);
filterType.addEventListener('change', filterCars);

// أول ما الصفحة تفتح بنحط الفلاتر ونرندر كل العربيات
populateFilters();
renderCars(cars);

// Light/Dark mode toggle logic
function setMode(light) {
  if (light) {
    document.body.classList.add('light-mode');
    localStorage.setItem('colorMode', 'light');
    if (window.modeToggle) {
      modeToggle.textContent = 'الوضع الداكن';
      modeToggle.classList.add('light');
    }
  } else {
    document.body.classList.remove('light-mode');
    localStorage.setItem('colorMode', 'dark');
    if (window.modeToggle) {
      modeToggle.textContent = 'الوضع الفاتح';
      modeToggle.classList.remove('light');
    }
  }
}
function getSavedMode() {
  return localStorage.getItem('colorMode') === 'light';
}
window.addEventListener('DOMContentLoaded', function() {
  setMode(getSavedMode());
  if (window.modeToggle) {
    modeToggle.addEventListener('click', () => {
      const isLight = !document.body.classList.contains('light-mode');
      setMode(isLight);
    });
  }
});

// Add a fallback for back button on details page (if you use this script on details page)
if (window.location.pathname.endsWith('car-details.html')) {
  document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.querySelector('.back-link, #back-button');
    if (backBtn) {
      backBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = 'index.html';
        }
      });
    }
  });
}

// // كده كل حاجة شغالة لايف من غير ريفريش