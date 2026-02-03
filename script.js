// -------------------------------
// 1. DATA (Single Source of Truth)
// -------------------------------
const products = [
  { name: "Laptop", category: "Electronics", price: 55000 },
  { name: "Phone", category: "Electronics", price: 30000 },
  { name: "Shirt", category: "Clothing", price: 1200 },
  { name: "Shoes", category: "Clothing", price: 2500 }
];

// -------------------------------
// 2. DOM REFERENCES
// -------------------------------
const categorySelect = document.getElementById("categorySelect");
const productContainer = document.getElementById("productContainer");

// -------------------------------
// 3. RENDER FUNCTION (UI ONLY)
// -------------------------------
function renderProducts(productList) {
  productContainer.innerHTML = "";

  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price.toFixed(2)}</p>
    `;

    productContainer.appendChild(card);
  });
}

// -------------------------------
// 4. FILTER CONTROLLER (LOGIC)
// -------------------------------
function handleFilterChange() {
  const selectedCategory = categorySelect.value;

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          product => product.category === selectedCategory
        );

  renderProducts(filteredProducts);
}

// -------------------------------
// 5. EVENT BINDING
// -------------------------------
categorySelect.addEventListener("change", handleFilterChange);

// -------------------------------
// 6. INITIAL RENDER
// -------------------------------
renderProducts(products);
