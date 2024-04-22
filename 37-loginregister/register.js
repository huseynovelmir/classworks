const registerform = document.querySelector(".registerform");
console.log(registerform);
let username = document.querySelector(".name");
let mail = document.querySelector(".email");
let password = document.querySelector(".password");
registerform.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    companyName: username.value,
    contactName: mail.value,
    contactTitle: password.value,
  };

  fetch("https://northwind.vercel.app/api/suppliers", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json;",
    },
  });
  username = "";
  mail = "";
  password = "";
  window.location.href = "./index.html";
});
