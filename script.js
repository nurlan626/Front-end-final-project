import users from "./data/data.js";

localStorage.setItem('users', JSON.stringify(users))
//  localStorage.setItem('user', JSON.stringify('werwer'))
// localStorage.clear()
const getUser = JSON.parse(localStorage.getItem("user"));
const container = document.getElementById("container");
if (getUser) {
  container.innerHTML = `
      <a href="./myComputers/myComputers.html">
         <button>My computers</button>
      </a>
      <a href="./catalog/catalog.html">
        <button>Catalog</button>
      </a>
      <button id="btn-signOut">Sign out</button>
    `;
} else {
  container.innerHTML = `
      <a href="./catalog/catalog.html">
        <button>Catalog</button>
      </a>
      <a href="./logIn/logIn.html">
        <button>Log in</button>
      </a>
    `;
}
