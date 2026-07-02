// قاعدة بيانات العربيات - فيها كل الماركات والموديلات
const carsData = [
    // تويوتا
    {
        id: 1,
        brand: "Toyota",
        name: "Camry",
        year: 2023,
        type: "Sedan",
        price: 32000,
        image: "images/toyota-camry.jpg",
        features: ["Keyless Entry", "Lane Departure", "Blind Spot"]
    },
    {
        id: 2,
        brand: "Toyota",
        name: "RAV4",
        year: 2023,
        type: "SUV",
        price: 34000,
        image: "images/rav4.jpg",
        features: ["Toyota Safety Sense", "AWD", "Panoramic Roof"]
    },
    
    // بي ام دبليو
    {
        id: 5,
        brand: "BMW",
        name: "X5",
        year: 2023,
        type: "SUV",
        price: 65000,
        image: "images/bmw-x5.jpg",
        features: ["Premium Sound", "Panoramic Roof", "360 Camera"]
    },
    {
        id: 6,
        brand: "BMW",
        name: "M4",
        year: 2022,
        type: "Coupe",
        price: 75000,
        image: "images/bmw-m4.jpg",
        features: ["Sport Package", "Carbon Fiber", "Track Mode"]
    },
    
    // مرسيدس
    {
        id: 7,
        brand: "Mercedes",
        name: "C-Class",
        year: 2023,
        type: "Sedan",
        price: 55000,
        image: "images/merc-c.jpg",
        features: ["MBUX", "LED Lights", "Sport Seats"]
    },
    
    // كيا
    {
        id: 10,
        brand: "Kia",
        name: "Telluride",
        year: 2023,
        type: "SUV",
        price: 45000,
        image: "images/kia-telluride.jpg",
        features: ["3rd Row", "Premium Audio", "AWD"]
    },
    
    // هونداي
    {
        id: 11,
        brand: "Hyundai",
        name: "Sonata",
        year: 2022,
        type: "Sedan",
        price: 28000,
        image: "images/hyundai-sonata.jpg",
        features: ["Smart Cruise", "Wireless Charging", "BlueLink"]
    },
    {
        id: 12,
        brand: "Hyundai",
        name: "Palisade",
        year: 2023,
        type: "SUV",
        price: 42000,
        image: "images/hyundai-palisade.jpg",
        features: ["3rd Row", "Highway Assist", "Premium Audio"]
    },
    
    // فولكس فاجن
    {
        id: 13,
        brand: "Volkswagen",
        name: "Golf GTI",
        year: 2023,
        type: "Hatchback",
        price: 35000,
        image: "images/vw-gti.jpg",
        features: ["Turbo Engine", "Sport Suspension", "Digital Cockpit"]
    },
    
    // فورد
    {
        id: 25,
        brand: "Ford",
        name: "F-150",
        year: 2024,
        type: "Pickup",
        price: 52000,
        image: "images/ford-f150.jpg",
        features: ["Pro Power", "Sync 4", "360 Camera"]
    }
];
