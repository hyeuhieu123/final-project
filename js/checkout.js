const checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
const users = JSON.parse(localStorage.getItem("users"));
const products = JSON.parse(localStorage.getItem("products"));

function cartCheck() {
  const cartCheckel = document.querySelectorAll("#cartCheck");
  const totalEl = document.querySelectorAll("#total");
  const taxesEl = document.getElementById("taxes");
  let cartQuantity = 0;
  let total = 0;
  let taxes = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        cartQuantity += users[i].cart[j].quantity;
        total += users[i].cart[j].price * users[i].cart[j].quantity;
      }
      console.log(cartQuantity);
    }
  }
  if (total < 10000) {
    taxes = `${((total * 7.47074) / 100).toFixed(3)}đ`;
  } else {
    taxes = `${(((total / 1000) * 7.47074) / 100).toFixed(3)}.000đ`;
  }
  // console.log(total);

  //   console.log(((total * 7.4074) / 100).toFixed(3));

  if (cartQuantity > 0) {
    for (let i = 0; i < 3; i++) {
      totalEl[i].innerHTML = `${(total / 1000).toFixed(3)}.000đ`;
      cartCheckel[i].innerHTML = cartQuantity;
      taxesEl.innerHTML = `${taxes}	`;
    }
  } else {
    for (let i = 0; i < 3; i++) {
      cartCheckel[i].innerHTML = "GIỎ HÀNG CỦA BẠN TRỐNG";
      totalEl[i].innerHTML = "";
      taxesEl.innerHTML = "";
    }
  }
}
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
  renderCart();
}
userCheck();
function renderCart() {
  const cartEl = document.querySelector(".cart-display");
  let cartHtml = "";

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        const product = users[i].cart[j];
        const option = [];
        for (let k = 1; k < 10; k++) {
          let select = k == product.quantity ? "selected" : "";
          option.push(`<option value="${k}" ${select}>${k}</option>`);
        }

        cartHtml += `
          <div class="cart-item">
            <div class="image">
              <img src=${product.image} alt="" />
            </div>
            <div class="info">
              <div class="title">
                <p>${product.name}</p>
                <p>${(product.price / 1000).toFixed(3)}.000đ</p>
              </div>
              <select id="selectAt${product.id}" onchange="changeSelect(${
          product.id
        })">
                ${option}
              </select>
            </div>
            <div class="deleteBtn" onclick="deleteCart(${product.id})">
              <button>X</button>
            </div>
          </div>
        `;
      }
    }
  }

  cartEl.innerHTML = cartHtml;
}

function changeSelect(productId) {
  const newQuantity = document.getElementById(`selectAt${productId}`).value;
  console.log(parseInt(newQuantity));
  let cartQuantity = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id === productId) {
          users[i].cart[j].quantity = parseInt(newQuantity);
        }
      }
    }
  }

  localStorage.setItem("users", JSON.stringify(users));
  cartCheck();
  renderCart();
}
function deleteCart(productId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === checkLogin) {
      users[i].cart = users[i].cart.filter((product) => {
        return product.id !== productId;
      });

      localStorage.setItem("users", JSON.stringify(users));
      cartCheck();
      renderCart();
    }
  }
}
