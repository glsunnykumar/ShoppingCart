// scripts/cart.js

function displayCart() {
  const cartContainer = document.getElementById("cart");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(item => {
    const row = document.createElement("p");
    row.innerHTML = `
      ${item.name} - ₹${item.price} x ${item.quantity}
      <button class="remove" data-id="${item.id}">Remove</button>
    `;
    cartContainer.appendChild(row);
  });

  // Remove item event
  document.querySelectorAll(".remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      removeFromCart(id);
    });
  });
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

document.addEventListener("DOMContentLoaded", displayCart);
