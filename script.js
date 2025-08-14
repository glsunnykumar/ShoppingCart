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
    let products = document.getElementsByClassName("product-card");

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].querySelector("h3").innerText.toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
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
