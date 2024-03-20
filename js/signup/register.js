const formRegister = document.getElementById("formRegister");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
/////
////


const userLocal = JSON.parse(localStorage.getItem("users")) || [];

formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
  
  if (firstName.value && lastName.value && email.value && password.value) {
     user = {
      id: Math.ceil(Math.random() * 100000000),
      name: `${firstName.value} ${lastName.value}`,
      email: email.value,
      password: password.value,
      cart: [],
    };
    let isFlag = true;
    for (let i = 0; i < userLocal.length; i++) {
      if (
        email.value === userLocal[i].email &&
        password.value === userLocal[i].password
      ) {
        alert("email trùng ");
        isFlag = false;
      }
    }
    if (isFlag === true) {
      userLocal.push(user);
      localStorage.setItem("users", JSON.stringify(userLocal));
      setTimeout(function () {

        location.href = "../pages/login.html";
      }, 1000);
    }
  }
});
// localStorage.clear();
// console.log(userLocal);

// function checkEmail(){
// 	for(let i  =0 ; i<userLocal.length;i++){
// 		if()
// 	}
// }
