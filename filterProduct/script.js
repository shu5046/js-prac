const products = [
  {
    id: 1,
    name: "Laptop",
    desc: "High performance laptop for gaming and work.",
    price: 999.99,
    imageUrl: "https://example.com/laptop.jpg",
    category: "Electronics",
    sizes: ["15 inch", "17 inch"],
  },
  {
    id: 2,
    name: "Smartphone",
    desc: "Latest model smartphone with high resolution camera.",
    price: 699.99,
    imageUrl: "https://example.com/smartphone.jpg",
    category: "Electronics",
    sizes: ["64GB", "128GB"],
  },
  {
    id: 3,
    name: "T-shirt",
    desc: "Comfortable cotton t-shirt in various colors.",
    price: 19.99,
    imageUrl: "https://example.com/tshirt.jpg",
    category: "Clothing",
    sizes: ["S", "M", "L"],
  },
  //i am making this comment to make some changes in the code, so that I can verify it in git 
  {
    id: 4,
    name: "Coffee Maker",
    desc: "Brew your favorite coffee at home with ease.",
    price: 49.99,
    imageUrl: "https://example.com/coffeemaker.jpg",
    category: "Home & Garden",
    sizes: ["Standard"],
  },
  {
    id: 5,
    name: "T-shirt",
    desc: "Comfortable cotton t-shirt in various colors.",
    price: 19.99,
    imageUrl: "https://example.com/tshirt.jpg",
    category: "Clothing",
    sizes: ["S", "M", "L"],
  },
  {
    id: 6,
    name: "T-shirt",
    desc: "Comfortable cotton t-shirt in various colors.",
    price: 19.99,
    imageUrl: "https://example.com/tshirt.jpg",
    category: "Home & Garden",
    sizes: ["S", "M", "L"],
  },
];
const productContainer = document.querySelector(".product-container");
const allProducts = document.getElementById("allProducts");
const elec = document.getElementById("elec");
const cloth = document.getElementById("Cloth");
const h_g = document.getElementById("h&g");
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filter = products.filter(
    (p) =>
      p.name.toLowerCase().includes(keyword) ||
      p.desc.toLowerCase().includes(keyword)
  );
  showCards(filter)
});

function showCards(obj) {
  productContainer.innerHTML = "";
  obj.forEach((p) => {
    const img = document.createElement("img");
    const name = document.createElement("h2");
    const desc = document.createElement("p");
    const price = document.createElement("p");
    img.src = p.imageUrl;
    name.textContent = p.name;
    desc.textContent = p.desc;
    price.textContent = p.price;
    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(price);

    productContainer.appendChild(card);
  });
}
showCards(products);
allProducts.addEventListener("click", () => {
  showCards(products);
});
elec.addEventListener("click", () => showProducts("Electronics"));
cloth.addEventListener("click", () => showProducts("Clothing"));
h_g.addEventListener("click", () => showProducts("Home & Garden"));

function showProducts(search) {
  let filteredProducts = products.filter((p) => p.category == search);
  showCards(filteredProducts);
}
