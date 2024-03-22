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
    }
  }
  if (total < 10000) {
    taxes = `${((total * 7.47074) / 100).toFixed(3)}đ`;
  } else {
    taxes = `${(((total / 1000) * 7.47074) / 100).toFixed(3)}.000đ`;
  }
  console.log(total);

  //   console.log(((total * 7.4074) / 100).toFixed(3));

  if (cartQuantity > 0) {
    for (let i = 0; i < 3; i++) {
      totalEl[i].innerHTML = `${(total / 1000).toFixed(3)}.000đ`;
      cartCheckel[i].innerHTML = cartQuantity;
      taxesEl.innerHTML = `${taxes}	`;
    }
  } else {
    cartCheck[0].innerHTML = "GIỎ HÀNG CỦA BẠN TRỐNG";
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
}
userCheck();
function renderCart() {}
