const tableRenderUser = document.getElementById("table1");
const tableRenderProduct = document.getElementById("table2");
let users = JSON.parse(localStorage.getItem("users")) || [];
let productsLocal = JSON.parse(localStorage.getItem("products")) || [];

function tableRenderUsers() {
  let tableUser = `<tr>
    <th>STT</th>
    <th>ID</th>
    <th>Họ và tên</th>
    <th>Email</th>
    <th>Thao tác</th>
  </tr>`;

  for (let i = 1; i < users.length; i++) {
    tableUser += `
      <tr>
        <td>${i + 1 - 1}</td>
        <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].email}</td>
        <td>
          <button onClick="deleteUser(${users[i].id})">Xóa</button>
          <button>Chỉnh sửa</button>
        </td>
      </tr>`;
  }
  tableRenderUser.innerHTML = tableUser;
}

function tableRenderProducts() {
  let tableProduct = `<tr>
    <th>STT</th>
    <th>ID</th>
    <th>Name</th>
    <th>Img</th>
    <th>Price</th>
    <th>Thao tác</th>
  </tr>`;

  for (let j = 0; j < productsLocal.length; j++) {
    tableProduct += `
      <tr>
        <td>${j + 1}</td>
        <td>${productsLocal[j].id}</td>
        <td>${productsLocal[j].name}</td>
        <td><img src="${productsLocal[j].img}" alt="" /></td>
        <td>${productsLocal[j].price}</td>
        <td>
          <button onClick="deleteProduct(${productsLocal[j].id})">Xóa</button>
          <button>Chỉnh sửa</button>
        </td>
      </tr>`;
  }
  tableRenderProduct.innerHTML = tableProduct;
}

function deleteProduct(productId) {
  productsLocal = productsLocal.filter((product) => product.id != productId);
  tableRenderProducts();
  localStorage.setItem("products", JSON.stringify(productsLocal));
}

function deleteUser(userId) {
  users = users.filter((user) => user.id != userId);
  tableRenderUsers();
  localStorage.setItem("users", JSON.stringify(users));
}

document.getElementById("showUsers").addEventListener("click", function () {
  tableRenderUsers();
  tableRenderUser.style.display = "block";
  tableRenderProduct.style.display = "none";
});

document.getElementById("showProducts").addEventListener("click", function () {
  tableRenderProducts();
  tableRenderUser.style.display = "none";
  tableRenderProduct.style.display = "block";
});
