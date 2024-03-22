const tableRenderUser = document.getElementById("table1");
const tableRenderProduct = document.getElementById("table2");
let users = JSON.parse(localStorage.getItem("users"));
let productsLocal = JSON.parse(localStorage.getItem("products"));
function render() {
  let tableUser = "";
  let tableProduct = "";

  for (let i = 0; i < users.length; i++) {
    tableUser += `
            <tr>
                <td>${i + 1}</td>
                <td>${users[i].id}</td>
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
				<td><button onClick="deleteUser(${
          users[i].id
        })">Xoa</button><button>chỉnh sửa</button></td>
            </tr>`;
  }
  tableRenderUser.innerHTML = tableUser;

  for (let j = 0; j < productsLocal.length; j++) {
    tableProduct += `
            <tr>
                <td>${j + 1}</td>
                <td>${productsLocal[j].id}</td>
                <td>${productsLocal[j].name}</td>
                <td><img src="${productsLocal[j].img}" alt="" /></td>
                <td>${productsLocal[j].price}</td>
                <td><button onClick="deleteProduct(${
                  productsLocal[j].id
                })">Xoa</button><button>chỉnh sửa</button></td>
            </tr>`;
  }
  tableRenderProduct.innerHTML = tableProduct;
}
render();

function deleteProduct(prodctId) {
  productsLocal = productsLocal.filter((product) => product.id != prodctId);
  //   localStorage.setItem("products", JSON.stringify(productsLocal));
  render();
}
function deleteUser(userId) {
  users = users.filter((user) => user.id != userId);
  //   localStorage.setItem("products", JSON.stringify(productsLocal));
  render();
}

function search() {
  //   const searchValue = document.getElementById("searchInput").value;
  //   console.log(searchValue);

  const searchProduct = productsLocal.filter((product) =>
    product.name
      .toLowerCase()
      .includes(document.getElementById("searchInput").value)
  );
  let searchTable = "";
  for (let i = 0; i < searchProduct.length; i++) {
    searchTable += `
      <tr>
        <td>${i + 1}</td>
        <td>${searchProduct[i].id}</td>
        <td>${searchProduct[i].name}</td>
        <td><img src="${searchProduct[i].img}" alt="" /></td>
        <td>${searchProduct[i].price}</td>
        <td><button onClick="deleteProduct(${
          searchProduct[i].id
        })">Xoa</button><button>chỉnh sửa</button></td>
      </tr>`;
  }
  tableRenderProduct.innerHTML = searchTable;
}
