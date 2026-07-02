const meals = {
  salad: {
    title: "سلطة خضراء",
    img: "imgs/Green Salad.png",
    desc: "سلطة خضراء طازجة مليئة بالفيتامينات والألياف."
  },
  chicken: {
    title: "دجاج مشوي",
    img: "imgs/ramadanrecipe_recipe_779_188528ed865-bb5d-4e62-8e4c-c02ef0d9e52d.jpg",
    desc: "صدر دجاج مشوي غني بالبروتين وقليل الدهون."
  },
  juice: {
    title: "عصير طبيعي",
    img: "imgs/671217058-H.jpg",
    desc: "عصير فواكه طبيعي ومنعش بدون سكريات مضافة."
  }
};

function showMeal(key) {
  const meal = meals[key];
  document.getElementById("modal-title").textContent = meal.title;
  document.getElementById("modal-img").src = meal.img;
  document.getElementById("modal-desc").textContent = meal.desc;

  // Add Buy and Back buttons dynamically
  const modal = document.getElementById("modal");
  const buyBtn = document.createElement("button");
  buyBtn.textContent = "Buy";
  buyBtn.style.margin = "10px";
  buyBtn.onclick = () => alert(`You have selected to buy: ${meal.title}`);

  const backBtn = document.createElement("button");
  backBtn.textContent = "Back";
  backBtn.style.margin = "10px";
  backBtn.onclick = closeModal;

  const modalContent = modal.querySelector(".modal-content");
  modalContent.appendChild(buyBtn);
  modalContent.appendChild(backBtn);

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";

  // Remove Buy and Back buttons to avoid duplicates
  const modalContent = modal.querySelector(".modal-content");
  while (modalContent.lastChild.tagName === "BUTTON") {
    modalContent.removeChild(modalContent.lastChild);
  }
}

// Removed dark mode toggle functionality
document.getElementById('theme-toggle')?.remove();
