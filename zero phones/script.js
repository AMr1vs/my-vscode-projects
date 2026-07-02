// Toggle navigation menu
document.querySelector('.fa-bars').addEventListener('click', () => {
    document.querySelector('.nav-items').classList.toggle('active');
});

// Add to cart functionality
function addToCart(productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1,
        });
    }

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    window.location.href = 'cart.html';
}

// Display cart items on the cart page
function displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartEmptyMessage = document.getElementById("cart-empty");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartEmptyMessage.style.display = "block";
        cartItemsContainer.style.display = "none";
    } else {
        cartEmptyMessage.style.display = "none";
        cartItemsContainer.style.display = "block";
        cartItemsContainer.innerHTML = ""; // Clear previous items

        cart.forEach((item) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <h3>${item.name}</h3>
                <p>السعر: ${item.price}$</p>
                <p>الكمية: ${item.quantity}</p>
                <button class="btn" onclick="removeFromCart('${item.name}')">إزالة</button>
            `;

            cartItemsContainer.appendChild(cartItem);
        });
    }
}

// Remove an item from the cart
function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.name !== productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Refresh the page to update the cart
}

// Complete the order
function completeOrder() {
    localStorage.removeItem("cart");
    document.getElementById("purchase-alert").classList.add("show");
}

// Close the purchase alert
function closeAlert() {
    document.getElementById("purchase-alert").classList.remove("show");
    location.href = "index.html"; // Redirect to the homepage
}

// Load cart items when the cart page is opened
if (window.location.pathname.includes("cart.html")) {
    displayCart();
}
