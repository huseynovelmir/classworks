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
// let a = 1234;
// let b = parseInt(a / 1000);
// let c = parseInt((a % 100) / 10);
// let d = a % 10;
// let e = parseInt(a / 100) % 10;

// console.log("cem:", b + c + d + e, "hasil", b * c * d * e);

//! səkkiz
// let a = "50-70";
// let b = (a[0] + a[1]) * 1;
// let c = (a[3] + a[4]) * 1;
// if (b > c) {
//   b = b.toString();
//   c = c.toString();
//   console.log(`${b}-${c}`);
// } else {
//   b = b.toString();
//   c = c.toString();
//   console.log(`${c}-${b}`);
// }

//! doqquz
let num = "13-11-12";
let a = (num[0] + num[1]) * 1;
let b = (num[3] + num[4]) * 1;
let c = (num[6] + num[7]) * 1;

if (c < a && a < b) {
  a = a.toString();
  b = b.toString();
  c = c.toString();
  console.log(`${c}-${a}-${b}`);
} else if (b < a && a < c) {
  console.log(`${b}-${a}-${c}`);
} else if (c < b && b < a) {
  console.log(`${c}-${b}-${a}`);
} else if (b < c && c < a) {
  console.log(`${b}-${c}-${a}`);
} else if (a < c && c < b) {
  console.log(`${a}-${c}-${b}`);
} else {
  console.log(`${a}-${b}-${c}`);
}
