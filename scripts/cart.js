// Get cart from localStorage or empty array
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const cartContainer = document.getElementById('cart');
const totalContainer = document.getElementById('cart-total');

function displayCart() {
    cartContainer.innerHTML = '';
    let totalAmount = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="empty">Your cart is empty</p>';
        totalContainer.innerHTML = '';
        return;
    }

    cartItems.forEach((item, index) => {
        totalAmount += item.price * item.quantity;

        const itemElement = document.createElement('p');
        itemElement.innerHTML = `
            ${item.name} - ₹${item.price} x 
            <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
            = ₹${item.price * item.quantity}
            <button class="remove" onclick="removeItem(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });

    totalContainer.innerHTML = `<h3>Total: ₹${totalAmount}</h3>`;
}

function removeItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
}

function updateQuantity(index, newQuantity) {
    cartItems[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
}

// Initialize display
displayCart();
