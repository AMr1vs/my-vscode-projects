// بيانات العربيات (انسخ نفس الداتا من script.js أو استوردها بطريقة مناسبة)
const cars = [
  { id: 1, name: "Toyota Corolla", year: 2021, type: "Sedan", brand: "Toyota", price: 420000, img: "./carImages/Toyota Corolla - 2021.png" },
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

function getCarIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

function showCarDetails() {
  const carId = getCarIdFromUrl();
  const car = cars.find(c => c.id === carId);
  const detailsDiv = document.getElementById('carDetails');
  if (!detailsDiv) return; // Prevent error if element not found
  if (!car) {
    detailsDiv.innerHTML = '<p>السيارة غير موجودة.</p>';
    return;
  }
  detailsDiv.innerHTML = `
    <img class="car-img" src="${car.img}" alt="${car.name}">
    <div class="car-title">${car.name}</div>
    <div class="car-meta">الماركة: ${car.brand}</div>
    <div class="car-meta">السنة: ${car.year}</div>
    <div class="car-meta">النوع: ${car.type}</div>
    <span class="car-price">${car.price.toLocaleString()} جنيه</span>
  `;
}

showCarDetails();
