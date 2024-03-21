const tableRenderUser = document.getElementById("table1");
const tableRenderProduct = document.getElementById("table2");

const users = JSON.parse(localStorage.getItem("users"));
const products = JSON.parse(localStorage.getItem("products"));
let tableUser = "";
let tableProduct;
for (let i = 0; i < users.length; i++) {
  tableUser += `      <tr>
	
  <tr>
	<td>${i + 1}</td>
	<td>${users[i].id}</td>
	<td>${users[i].name}</td>
	<td>${users[i].email}</td>
	
  </tr>`;
}
tableRenderUser.innerHTML = tableUser;
console.log(products);
for (let j = 0; j < products.length; j++) {
  tableProduct += `      <tr>
	
  <tr>
	<td>${j + 1}</td>
	<td>${products[j].id}</td>
	<td>${products[j].name}</td>
	<td><img src="../${products[j].img}" alt="" /></td>
	<td>${products[j].price}</td>
	
	`;
}
tableRenderProduct.innerHTML = tableProduct;
