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
      <button>Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  // Check if this page has a data-limit for featured products
  const limit = document.body.getAttribute("data-product-limit");
  displayProducts(limit ? parseInt(limit) : null);
});
