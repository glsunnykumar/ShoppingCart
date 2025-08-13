let cart = [];

// Product prices
const prices = {
    "Cool T-Shirt": 700,
    "Stylish Cap": 200,
    "Leather Wallet": 850,
    "Sports Shoes": 2200,
    "Wrist Watch": 1500,
    "Backpack": 1200
};

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = "block"; // show matching products
        } else {
            product.style.display = "none";  // hide non-matching products
        }
    });
}


function addToCart(productName) {
    let price = prices[productName];

    let item = cart.find(p => p.name === productName);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    displayCart();
}

function displayCart() {
    let cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartContainer.innerHTML += `
            <p>${item.name} - ₹${item.price} x ${item.quantity} 
            = ₹${itemTotal} 
            <button onclick="removeFromCart('${item.name}')">Remove</button></p>
        `;
    });

    cartContainer.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

function removeFromCart(productName) {
    cart = cart.filter(p => p.name !== productName);
    displayCart();
}
