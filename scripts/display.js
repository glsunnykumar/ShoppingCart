// scripts/display.js

function displayProducts(limit = null) {
    const container = document.querySelector(".products");
    container.innerHTML = ""; // Clear any existing products

    let itemsToShow = products;
    if (limit) {
        itemsToShow = products.slice(0, limit); // Show only first N products
    }

    itemsToShow.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
      <img src="${product.image || 'Images/placeholder.png'}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;

        container.appendChild(card);
    });

    // Add event listeners for Add to Cart buttons
    document.querySelectorAll(".product-card button").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            addToCart(id);
        });
    });
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === productId);

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const limit = document.body.getAttribute("data-product-limit");
    displayProducts(limit ? parseInt(limit) : null);
});
