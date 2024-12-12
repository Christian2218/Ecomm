// // Store cart items
// let cartItems = [];

// // Show product details in the modal
// function showProductDetails(name, price, image) {
//     document.getElementById('product-name').innerText = name;
//     document.getElementById('product-price').innerText = price;
//     document.getElementById('product-image').src = image;

//     // Store product details for adding to the cart
//     window.currentProduct = { name, price, image };

//     // Show the modal
//     const productDetailsModal = new bootstrap.Modal(document.getElementById('productDetailsModal'));
//     productDetailsModal.show();
// }

// // Add the current product to the cart
// function addToCart() {
//     const product = window.currentProduct;

//     // Check if the product already exists in the cart
//     const existingProduct = cartItems.find(item => item.name === product.name);
//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         cartItems.push({ ...product, quantity: 1 });
//     }

//     updateCart();
// }

// // Update cart UI in real-time
// function updateCart() {
//     const cartItemsContainer = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');

//     // Clear current cart items
//     cartItemsContainer.innerHTML = '';

//     let total = 0;

//     // Add cart items to the table
//     cartItems.forEach(item => {
//         const itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity;
//         total += itemTotal;

//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.name}</td>
//             <td>${item.quantity}</td>
//             <td>${item.price}</td>
//             <td>$${itemTotal.toFixed(2)}</td>
//             <td>
//                 <button class="btn btn-danger btn-sm" onclick="removeCartItem('${item.name}')">
//                     <i class="fas fa-trash-alt"></i>
//                 </button>
//             </td>
//         `;
//         cartItemsContainer.appendChild(row);
//     });

//     // Update total
//     cartTotal.innerText = `$${total.toFixed(2)}`;
// }

// // Remove item from cart
// function removeCartItem(name) {
//     cartItems = cartItems.filter(item => item.name !== name);
//     updateCart();
// }
