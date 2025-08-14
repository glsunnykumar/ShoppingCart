// Example: Getting cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const cartContainer = document.getElementById('cart');
const totalContainer = document.getElementById('cart-total');

// Display Cart Items
function displayCart() {
    cartContainer.innerHTML = '';
    let totalAmount = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="empty">Your cart is empty</p>';
        totalContainer.innerHTML = '';
        return;
    }

    cartItems.forEach((item, index) => {
        totalAmount += item.price;

        const itemElement = document.createElement('p');
        itemElement.innerHTML = `
            ${item.name} - ₹${item.price}
            <button class="remove" onclick="removeItem(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });

    // Show Total Amount
    totalContainer.innerHTML = `<h3>Total: ₹${totalAmount}</h3>`;
}

// Remove an item
function removeItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
}

// Initial display
displayCart();
