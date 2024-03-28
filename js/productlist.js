// const productsData = [
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/trending/2.jpg",
//     price: 2500,
//     name: "GAZELLE",
//     status: "trending",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/trending/3.jpg",
//     price: 3000,
//     name: "STAN SMITH",
//     status: "trending",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/trending/4.jpg",
//     price: 3000,
//     name: "STAN SMITH",
//     status: "trending",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/trending/5.jpg",
//     price: 2500,
//     name: "GAZELLE",
//     status: "trending",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/trending/6.jpg",
//     price: 2600,
//     name: "Giày Adiform	Climacool",
//     status: "trending",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/trending/7.jpg",
//     price: 3900,
//     name: "NMD_R1 W",
//     status: "trending",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/trending/8.jpg",
//     price: 1000,
//     name: "Áo Thun Ba Lá Essentials",
//     status: "trending",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/trending/9.jpg",
//     price: 1100,
//     name: "MONO TEE",
//     status: "trending",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/1.jpg",
//     price: 2400,
//     name: "Giày bóng rổ AE 1 Velocity xanh",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/2.jpg",
//     price: 3100,
//     name: "Áo sân nhà Mexico 2024",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/3.jpg",
//     price: 3500,
//     name: "Giày bóng rổ Harden Volume 8",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/4.jpg",
//     price: 3100,
//     name: "Giày Samba OG",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/5.jpg",
//     price: 2100,
//     name: "Mexico 24 Away Jersey",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/6.jpg",
//     price: 2100,
//     name: "Mexico 24 Home Jersey",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/7.jpg",
//     price: 3100,
//     name: "Áo xanh nhà Argentina 2024",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/8.jpg",
//     price: 3300,
//     name: "Giày Top Ten 2000 ESPN",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/9.jpg",
//     price: 2600,
//     name: "Áo sân nhà Argentina 24 Messi",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/10.jpg",
//     price: 2400,
//     name: "Giày Sambae x KSENIASCHANDER",
//     status: "new",
//   },
//   {
//     id: Math.ceil(Math.random() * 10000),
//     img: "asset/images/arrival/11.jpg",
//     price: 3800,
//     name: "Áo sân nhà Argentina 24 Messi dài tay",
//     status: "new",
//   },
// ];
// localStorage.setItem("products", JSON.stringify(productsData));
const productsLocal = JSON.parse(localStorage.getItem("products"));

const htmlEl = document.querySelector(".product-container");
// function renderProducts(products) {
//   let productDisplay = "";

//   for (let i = 0; i < products.length; i++) {
//     productDisplay += `
//       <div onClick="addToCart(${products[i].id})" class="product-item">
//         <div class="image">
//           <img src="${products[i].img}" alt="" />
//           <p class="price">${(products[i].price / 1000).toFixed(3)}.000đ</p>
//         </div>
//         <p>${products[i].name}</p>
//       </div>`;
//   }

//   htmlEl.innerHTML = productDisplay;
// }
// // renderProducts(productsData);

// function filterProduct(status) {
//   return renderProducts(
//     productsLocal.filter((product) => product.status === status)
//   );
// }

// document.getElementById("trendingBtn").addEventListener("click", () => {
//   filterProduct("trending");
//   document.getElementById("trendingBtn").classList.add("selected");
//   document.getElementById("arrivalBtn").classList.remove("selected");
// });
// document.getElementById("arrivalBtn").addEventListener("click", () => {
//   filterProduct("new");
//   document.getElementById("arrivalBtn").classList.add("selected");
//   document.getElementById("trendingBtn").classList.remove("selected");
// });
// filterProduct("trending");
// document.getElementById("trendingBtn").classList.add("selected");
// document.getElementById("arrivalBtn").classList.remove("selected");

function renderProducts() {
  let productDisplay = "";

  for (let i = 0; i < productsLocal.length; i++) {
    productDisplay += `
      <div onClick="addToCart(${productsLocal[i].id})" class="product-item">
        <div class="image">
          <img src=${productsLocal[i].image} alt="" />
          <p class="price">${(productsLocal[i].price / 1000).toFixed(
            3
          )}.000đ</p>
        </div>
        <p>${productsLocal[i].name}</p> 
      </div>`;
  }

  htmlEl.innerHTML = productDisplay;
  console.log(productDisplay);
}
renderProducts();
