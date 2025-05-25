// Ensure the document is ready before executing scripts
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Main function to set up event listeners
function ready() {
  // Add product form submission
  document
    .getElementById("product-form")
    .addEventListener("submit", addProduct);

  // Initial products (if any) can be added here for demo
  // addProductToDisplay("AEROREADY SHIRT", 25, 10, "Shopping Cart img/img/product1.jpg");
  // addProductToDisplay("WIRELESS EARBUDS", 100, 15, "Shopping Cart img/img/product2.jpg");
}

// Function to handle product addition
function addProduct(event) {
  event.preventDefault();

  const title = document.getElementById("product-title").value;
  const price = parseFloat(
    document.getElementById("product-price").value
  ).toFixed(2);
  const quantity = parseInt(document.getElementById("product-quantity").value);
  const imgURL = document.getElementById("product-img").value;

  // Validate inputs
  if (price < 1 || quantity < 1) {
    alert("Price and quantity must be at least 1.");
    return;
  }

  addProductToDisplay(title, price, quantity, imgURL);

  // Clear the form
  document.getElementById("product-form").reset();
}

// Function to add product to the shop display
function addProductToDisplay(title, price, quantity, imgURL) {
  const shopContent = document.getElementById("shop-content");

  const productBox = document.createElement("div");
  productBox.classList.add("product-box");

  const productHTML = `
    <img src="${imgURL}" alt="${title}" class="product-img" />
    <h2 class="product-title">${title}</h2>
    <span class="price">$${price}</span>
    <span class="quantity">Quantity: ${quantity}</span>
    <i class="bx bx-shopping-bag add-cart"></i>
    <button class="delete-product">Delete</button>
  `;

  productBox.innerHTML = productHTML;
  shopContent.appendChild(productBox);

  // Event listener for 'add to cart' button
  productBox.querySelector(".add-cart").addEventListener("click", () => {
    alert(`Added ${title} to Customer page`);
  });

  // Event listener for 'delete product' button
  productBox.querySelector(".delete-product").addEventListener("click", () => {
    productBox.remove();
  });
}
