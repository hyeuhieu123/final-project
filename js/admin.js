let main_content = document.querySelector(".main_content");
let users = JSON.parse(localStorage.getItem("users")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];
let category = JSON.parse(localStorage.getItem("category")) || [
  { id: 123, name: "áo" },
  { id: 321, name: "quần" },
];
localStorage.setItem("category", JSON.stringify(category));
function displayUser() {
  main_content.innerHTML = `
    
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên người dùng</th>
          <th>Email</th>
          
          <th>Thao Tác</th>
        </tr>
      </thead>
      <tbody id="usertable"></tbody>
    </table>
   `;
  renderUser();
}
function renderUser() {
  const tableUser = document.querySelector("#usertable");
  tableUser.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${users[i].name}</td>
      <td>${users[i].email}</td>
      <td><button onclick="deleteUser(${users[i].id})">Xóa</button> </td>
    `;
    tableUser.appendChild(row);
  }
}

function deleteUser(userId) {
  users = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(users));
  renderUser();
}
function displayCategory() {
  main_content.innerHTML = `
    <form id="formCategory">
      <label for="">Tên</label>
      <input id="nameCategory" type="text" />
      <button type="submit">thêm</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Tên Danh Mục</th>
          <th>Thao Tác</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
   `;
  document.getElementById("1").classList.add("clickSidebar");
  document.getElementById("2").classList.remove("clickSidebar");

  renderCategory();

  const formCategory = document.getElementById("formCategory");
  formCategory.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameCategory = document.getElementById("nameCategory").value;
    let checkCategory = false;
    if (nameCategory) {
      for (let i = 0; i < category.length; i++) {
        if (category[i].name === nameCategory) {
          alert("Danh mục đã tồn tại");
          checkCategory = true;
          break;
        }
      }
      if (!checkCategory) {
        const newCategory = {
          id: Math.ceil(Math.random() * 10000),
          name: nameCategory,
        };
        category.push(newCategory);
        localStorage.setItem("category", JSON.stringify(category));
        renderCategory();
      }
    }
  });
}

function renderCategory() {
  const tableCategory = document.querySelector("table tbody");
  tableCategory.innerHTML = "";

  for (let i = 0; i < category.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${category[i].name}</td>
      <td><button onclick="deleteCategory(${
        category[i].id
      })">Xóa</button> <button onclick="editCategory(${
      category[i].id
    })">sửa</button></td>
    `;
    tableCategory.appendChild(row);
  }
}

function deleteCategory(categoryId) {
  category = category.filter((cat) => cat.id !== categoryId);
  localStorage.setItem("category", JSON.stringify(category));
  renderCategory();
}
function editCategory(categoryId) {
  const newName = prompt(
    "Nhập tên danh mục mới:",
    category.find((value) => value.id === categoryId).name
  );
  console.log(newName);
  for (let i = 0; i < category.length; i++) {
    if (category[i].id === categoryId) {
      category[i].name = newName;
    }
  }
  localStorage.setItem("category", JSON.stringify(category));
  renderCategory();
}

function displayProduct() {
  let option = "";
  for (let i = 0; i < category.length; i++) {
    option += `<option value="${category[i].id}">${category[i].name}</option>`;
  }

  main_content.innerHTML = `
    <form id="formProduct">
      <label for="nameProduct">Tên</label>
      <input id="nameProduct" type="text" required />

      <label for="imgProduct">Ảnh</label>
      <input id="imgProduct" type="file" accept="image/*" required />
      <img id="imgPreview" src="" style="display: none; max-width: 200px; margin-top: 10px;" />
      
      <label for="priceProduct">Giá</label>
      <input id="priceProduct" type="text" required />
      
      <label for="categoryProduct">Danh mục</label>
      <select id="categoryProduct" required>
        ${option}
      </select>

      <button type="submit">Thêm</button>
    </form>
    <div class="product-container"></div>
   `;
  document.getElementById("2").classList.add("clickSidebar");
  document.getElementById("1").classList.remove("clickSidebar");

  renderProduct();

  const formProduct = document.getElementById("formProduct");
  formProduct.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameProduct = document.getElementById("nameProduct").value;
    const imgProduct = document.getElementById("imgProduct").files[0];
    const priceProduct = document.getElementById("priceProduct").value;
    const categoryProduct = document.getElementById("categoryProduct").value;

    if (nameProduct && imgProduct && priceProduct && categoryProduct) {
      const reader = new FileReader();
      reader.onload = function () {
        const imgDataURL = reader.result;
        const selectedCategory = category.find(
          (value) => value.id == categoryProduct
        );
        const newProduct = {
          id: Math.ceil(Math.random() * 1000000),
          name: nameProduct,
          image: imgDataURL,
          price: priceProduct,
          category: selectedCategory,
        };
        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));
        renderProduct();
      };
      reader.readAsDataURL(imgProduct);
    }
  });

  const imgProduct = document.getElementById("imgProduct");
  imgProduct.addEventListener("change", function (event) {
    const imgPreview = document.getElementById("imgPreview");
    imgPreview.style.display = "block";

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      imgPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function renderProduct() {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    productContainer.innerHTML += `
      <div class="product-item">
        <div class="image">
          <img src=${products[i].image} alt="" />
        </div>
        <div class="info">
          <h2>${products[i].name}</h2>
          <p>${products[i].category.name}</p> <!-- Use category name -->
          <b>${(products[i].price / 1000).toFixed(3)}.000đ</b>
          </div>
          <button onclick="deleteProduct(${products[i].id})">X</button>
         
      </div>`;
  }
}
function deleteProduct(productId) {
  products = products.filter((product) => product.id !== productId);
  console.log(products);
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct();
}
function encodeImageFileAsURL(element) {
  const file = element.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    const imgPreview = document.getElementById("imgPreview");
    imgPreview.src = reader.result;
    imgPreview.style.display = "block";
  };
  reader.readAsDataURL(file);
}
