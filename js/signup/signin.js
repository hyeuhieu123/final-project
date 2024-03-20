const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");

const userLocal = JSON.parse(localStorage.getItem("users")) || [];

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  let flag = false; // Biến để kiểm tra trạng thái đăng nhập

  for (let i = 0; i < userLocal.length; i++) {
    if (
      email.value === userLocal[i].email &&
      password.value === userLocal[i].password
    ) {
      localStorage.setItem("checkLogin", JSON.stringify(userLocal[i].id));
      flag = true; // Đã đăng nhập thành công
      break;
    }
  }

  if (flag) {
    window.location.href = "../index.html";
  } else {
    alert("Sai thông tin đăng nhập.");
  }
});

