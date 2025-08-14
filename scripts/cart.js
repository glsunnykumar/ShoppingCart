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

        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span class="item-name">${item.name}</span>
            <span class="item-price">₹${item.price}</span>
            <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
            <span class="item-total">₹${item.price * item.quantity}</span>
            <button class="remove" onclick="removeItem(${index})" title="Remove item">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M135.2 17.7L141.7 0h164.6l6.5 17.7L328 32H448v32H0V32h120L135.2 17.7zM32 96h384l-28.7 384.5c-1.6 22.1-20 39.5-42.2 39.5H103c-22.2 0-40.6-17.4-42.2-39.5L32 96z"/>
                </svg>
            </button>
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

displayCart();
