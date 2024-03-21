const productsData = [
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/trending/2.jpg",
    price: "2.500.000d",
    name: "GAZELLE",
    status: "trending",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/trending/3.jpg",
    price: "3.000.000d",
    name: "STAN SMITH",
    status: "trending",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/trending/4.jpg",
    price: "3.000.000d",
    name: "STAN SMITH",
    status: "trending",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/trending/5.jpg",
    price: "2.500.000d",
    name: "GAZELLE",
    status: "trending",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/trending/6.jpg",
    price: "2.600.000d",
    name: "Giày Adiform	Climacool",
    status: "trending",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/trending/7.jpg",
    price: "3.900.000d",
    name: "NMD_R1 W",
    status: "trending",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/trending/8.jpg",
    price: "800.000d",
    name: "Áo Thun Ba Lá Essentials",
    status: "trending",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/trending/9.jpg",
    price: "1.100.000d",
    name: "MONO TEE",
    status: "trending",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/1.jpg",
    price: "2.400.000d",
    name: "Giày bóng rổ AE 1 Velocity xanh",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/2.jpg",
    price: "3.100.000d",
    name: "Áo sân nhà Mexico 2024",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/3.jpg",
    price: "3.500.000d",
    name: "Giày bóng rổ Harden Volume 8",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/4.jpg",
    price: "3.100.000d",
    name: "Giày Samba OG",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/5.jpg",
    price: "2.100.000d",
    name: "Mexico 24 Away Jersey",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/6.jpg",
    price: "2.100.000d",
    name: "Mexico 24 Home Jersey",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/7.jpg",
    price: "3.100.000d",
    name: "Áo xanh nhà Argentina 2024",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/8.jpg",
    price: "3.300.000d",
    name: "Giày Top Ten 2000 ESPN",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/9.jpg",
    price: "2.600.000d",
    name: "Áo sân nhà Argentina 24 Messi",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/10.jpg",
    price: "2.400.000d",
    name: "Giày Sambae x KSENIASCHANDER",
    status: "new",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    img: "asset/images/arrival/11.jpg",
    price: "3.800.000d",
    name: "Áo sân nhà Argentina 24 Messi dài tay",
    status: "new",
  },
];
localStorage.setItem("products", JSON.stringify(productsData));

const htmlEl = document.querySelector(".product-container");
function renderProducts(products) {
  let productDisplay = "";

  for (let i = 0; i < products.length; i++) {
    productDisplay += `
      <div onClick="addToCart(${products[i].id})" class="product-item">
        <div class="image">
          <img src="${products[i].img}" alt="" />
          <p class="price">${products[i].price}</p>
        </div>
        <p>${products[i].name}</p> 
      </div>`;
  }

  htmlEl.innerHTML = productDisplay;
}
// renderProducts(productsData);

function filterProduct(status) {
  return renderProducts(
    productsData.filter((product) => product.status === status)
  );
}

document.getElementById("trendingBtn").addEventListener("click", () => {
  filterProduct("trending");
  document.getElementById("trendingBtn").classList.add("selected");
  document.getElementById("arrivalBtn").classList.remove("selected");
});
document.getElementById("arrivalBtn").addEventListener("click", () => {
  filterProduct("new");
  document.getElementById("arrivalBtn").classList.add("selected");
  document.getElementById("trendingBtn").classList.remove("selected");
});
