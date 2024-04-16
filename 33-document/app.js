// const input = document.querySelector(".myinput");
// const button = document.querySelector(".mybutton");
// const p = document.querySelector(".text");
// button.addEventListener("click", myfunc);
// function myfunc() {
//   if (input.value.split(" ").join("").length === 0) {
//     p.innerText = "Sifre bosluqdan ibaretdir";
//     p.style.color = "red";
//   } else if (input.value.split(" ").join("").length > 8) {
//     console.log("Password 8 simvoldan çoxdur");
//     p.innerText = "Password 8 simvoldan çoxdur";
//     p.style.color = "red";
//   } else {
//     console.log(input.value);
//     p.innerText = "Şifrə doğrudur.";
//     p.style.color = "green";
//   }
//   input.value = "";
// }
const acc = document.getElementsByClassName("box");

let arr = Array.from(acc);
arr.forEach((element) => {
  element.addEventListener("click", myfunc);
  function myfunc() {
    if (element.nextElementSibling.style.display == "block") {
      element.nextElementSibling.style.display = "none";
      element.
    } else {
      element.nextElementSibling.style.display = "block";
    }
  }
});
