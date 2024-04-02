//! birinci
// let a = 4;
// let b = 10;
// if (a > b) {
//   console.log(a, "böyükdür", b);
// } else if (b > a) {
//   console.log(b, "böyükdür", a);
// } else {
//   console.log(b, "bərabərdir", a);
// }
//! ikinci
// let a = 1;
// let b = 1;
// let c = 3;
// if (a + b >= c && a + c >= b && c + b >= a) {
//   console.log("üçbucaqdır");
// } else {
//   console.log("deyil");
// }
//! üçüncü
// let a = 1;
// let b = 2;
// let c = 3;
// if (
//   a * a + b * b = c * c ||
//   a * a + c * c = b * b ||
//   c * c + b * b = a * a
// ) {
//   console.log("üçbucaqdır");
// } else {
//   console.log("deyil");
// }
//! dördüncü
// let balance = 40;
// let pass = 50;
// if (balance > pass) {
//   console.log("welcome");
// } else {
//   console.log("Bayıraaa");
// }
//! beşinci
// let balance = 140 / 100;
// let pass = 30 / 100;
// if (balance > pass) {
//   let count = balance - pass;
//   console.log("welcome your balance ", count.toFixed(1));
// } else {
//   console.log("Bayıraaa Balansda kifayət qədər vəsait yoxdu", balance);
// }

//! altıncı
// let balance = 20 / 100;
// let pass = 30 / 100;
// if (balance > pass) {
//   let count = balance - pass;
//   console.log("welcome your balance ", count.toFixed(1));
// } else {
//   let count2 = pass - balance;
//   console.log(
//     " Balansda kifayət qədər vəsait yoxdu",
//     count2.toFixed(1),
//     "çatmır"
//   );
// }
//! yeddinci
// let balance = 10 / 100;
// let pass = 30 / 100;
// let opperatoin = 2;
// if (balance > pass && opperatoin == 1) {
//   let count = balance - pass;
//   console.log("welcome your balance ", count.toFixed(1));
// } else if (opperatoin == 2 && balance < pass) {
//   let d = prompt("mebleğ daxil edin");
//   let count = (d * 1) / 100;
//   console.log(balance + count);
// }
//! səkkiz
let a = 1234;
let b = parseInt(a / 1000);
let c = parseInt((a % 100) / 10);
let d = a % 10;
let e = parseInt(a / 100) % 10;

console.log("cem:", b + c + d + e, "hasil", b * c * d * e);
