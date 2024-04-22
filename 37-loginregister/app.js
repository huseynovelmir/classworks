// https://northwind.vercel.app/api/suppliers
async function products() {
  const response = await fetch("https://northwind.vercel.app/api/suppliers");
  const data = await response.json();
  return data;
}
const registerbtn = document.querySelector(".reg");
registerbtn.addEventListener("click", () => {
  window.location.href = "./register.html";
});

products().then((data) => {
  console.log(data);
  const mail = document.querySelector(".email");
  const login = document.querySelector(".login");
  login.addEventListener("submit", (e) => {
    e.preventDefault();
    if (data.find((elem) => elem.contactName == mail.value)) {
      window.location.href = "./homepage.html";
    } else {
      window.location.href = "./error.html";
    }
  });
});
