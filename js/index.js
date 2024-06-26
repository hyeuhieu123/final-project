const slideshow1 = [
  {
    img: "asset/images/slideshow1/1.jpg",
    title: "Samba",
    info: "Tiến xa hơn với dòng giày hiking thoải mái nhất từ trước đến nay.",
  },
  {
    img: "asset/images/slideshow1/2.jpg",
    title: "GAZELLE",
    info: "Một thiết kế kinh điển đích thực với một di sản dài lâu.",
  },
  {
    img: "asset/images/slideshow1/3.jpg",
    title: "Spezial",
    info: "Một  phong cách thời trang lại vừa thời thượng .",
  },
  {
    img: "asset/images/slideshow1/4.jpg",
    title: "SL 72",
    info: "Phong cách kinh điển thập niên 70 dành cho Originals trên toàn thế giới.",
  },
];

function render() {
  let html = "";
  const slide = document.querySelector(".slide");

  for (let i = 0; i < slideshow1.length; i++) {
    html += `<div class="slide-item">
                <div class="image">
                    <img src="${slideshow1[i].img}" alt="" />
                </div>
                <div class="title">
                    <h4>${slideshow1[i].title}</h4>
                    <p>${slideshow1[i].info}</p>
                    <h4><u>XEM THÊM</u></h4>
                </div>
            </div>`;
  }
  slide.innerHTML = html;
}

function prev() {
  let temp = slideshow1.pop();
  slideshow1.unshift(temp);

  render();
}

function autoslideshow() {
  setInterval(() => {
    prev();
  }, 2500);
}

render();
autoslideshow();

const checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
const users = JSON.parse(localStorage.getItem("users")) || [
  {
    id: 1,
    email: "1",
    password: "1",
    cart: [],
  },
];
localStorage.setItem("users", JSON.stringify(users));
const products = JSON.parse(localStorage.getItem("products"));

cartCheck();

function addToCart(productId) {
  const products = JSON.parse(localStorage.getItem("products"));

  if (checkLogin === null) {
    alert("Bạn phải đăng nhập để mua hàng.");
    return;
  }

  let cartQuantity = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        cartQuantity += users[i].cart[j].quantity;
      }
      break;
    }
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      for (let j = 0; j < products.length; j++) {
        if (productId == products[j].id) {
          let checkProduct = true;

          for (let k = 0; k < users[i].cart.length; k++) {
            if (productId === users[i].cart[k].id) {
              users[i].cart[k].quantity += 1;
              checkProduct = false;
              break;
            }
          }
          if (checkProduct) {
            users[i].cart.push({ ...products[j], quantity: 1 });
          }

          localStorage.setItem("users", JSON.stringify(users));
        }
      }
    }
  }
  document.querySelector("#nofi").classList.add("nofi");
  setTimeout(() => {
    document.querySelector("#nofi").classList.remove("nofi");
    ` `;
  }, 2000);
  cartCheck();
}

function cartCheck() {
  const cartCheck = document.getElementById("cartCheck");
  let cartQuantity = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        cartQuantity += users[i].cart[j].quantity;
      }
    }
  }

  if (cartQuantity > 0) {
    cartCheck.innerHTML = `Giỏ hàng của  <br> bạn: ${cartQuantity} sản phẩm`;
  } else {
    cartCheck.innerHTML = "GIỎ HÀNG CỦA BẠN TRỐNG";
  }
  return cartQuantity;
}
// console.log(cartCheck());
// cartCheck();

// const loginElement = document.getElementById("login");
// if (checkLogin) {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id === checkLogin) {
//       loginElement.innerHTML = `Hello ${users[i].name}
//                                   <button id="logoutButton">Đăng xuất</button>`;
//       const logoutButton = document.getElementById("logoutButton");
//       if (logoutButton) {
//         logoutButton.addEventListener("click", function () {
//           logOut();
//           window.location.reload();
//         });
//       }
//     }
//   }
// } else {
//   loginElement.innerHTML = `
//         <button id="loginButton"><a href="./pages/login.html">Đăng nhập</a></button>
//         <button id="registerButton"><a href="./pages/register.html">Đăng ký</a></button>`;
// }

function logOut() {
  localStorage.removeItem("checkLogin");
}

function userCheck() {
  const loginElement = document.getElementById("login");
  if (checkLogin) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === checkLogin) {
        loginElement.innerHTML = `Hello ${users[i].name}
                                  <button id="logoutButton">Đăng xuất</button>`;
        const logoutButton = document.getElementById("logoutButton");
        if (logoutButton) {
          logoutButton.addEventListener("click", function () {
            logOut();
            window.location.reload();
          });
        }
      }
    }
  } else {
    loginElement.innerHTML = `  
        <button id="loginButton"><a href="./pages/login.html">Đăng nhập</a></button>
        <button id="registerButton"><a href="./pages/register.html">Đăng ký</a></button>`;
  }
  cartCheck();
}
userCheck();
// for (let i = 0; i < users.length; i++) {
//   if (users[i].id === checkLogin) {
//     console.log(users[i].cart);
//   }
// }
