  const cartItems = [];
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  // Function to update cart modal
  function updateCart() {
    cartItemsElement.innerHTML = "";
    let total = 0;

    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      cartItemsElement.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td>$${itemTotal.toFixed(2)}</td>
          <td>
            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
          </td>
        </tr>
      `;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
  }

  // Function to remove item from cart
  function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
  }

  // Function to add item to cart
  function addToCart(product) {
    const existingItem = cartItems.find(item => item.name === product.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    updateCart();
  }

  // Add event listeners to all "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();

      const productBox = event.target.closest(".box, .swiper-slide");
      const productName = productBox.querySelector("h3").textContent;
      const productPrice = parseFloat(productBox.querySelector(".price").textContent.replace("$", ""));

      const product = { name: productName, price: productPrice };
      addToCart(product);
    });
  });

  // Function for checkout (example)
  function goToCheckout() {
    alert("Proceeding to checkout...");
    // Implement your checkout logic here
  }

