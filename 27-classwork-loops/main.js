// for (let i = 17; i <= 97; i++) {
//   if (i % 10==7) {
//     console.log(i);
//   }
// }
//! with while
// let i = 17;
// while (i <= 97) {
//   if (i % 10 == 7) {
//     console.log(i);
//   }
//   i++

// }
// for (let i = 11; i <= 99; i++) {
//     if (i% 11==0) {
//         console.log(i);
//     }

// }
//! with while
// let i = 11;
// while (i <= 99) {
//   if (i % 11 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// let num = 734612378;
// let newnum = String(num);
// for (let i = 0; i < newnum.length; i++) {
//   console.log(newnum[i]);
// }
//! with while

// let num = 123;
// let newnum = String(num);
// let hasil = 1;
// let cem = 0;
// for (let i = 0; i < newnum.length; i++) {
//   hasil *= newnum[i] * 1;
//   cem += newnum[i] * 1;
// }
// console.log(hasil - cem);

// let num = 1235;
// let i = 0;
// let max = 0;
// while (num >= i) {
//   if (num[i] > max) {
//     max += nam[i];
//   }
//   i++;
//   console.log(num[i]);
// }
// console.log(max);

let num = 1234;
let str = String(num);
let min = Number(str[0]);
let max = Number(str[0]);
let maxindex = Number(str[0]);
let minindex = Number(str[0]);
for (let i = 0; i < str.length; i++) {
  if (Number(str[i]) < min) {
    min = Number(str[i]);
    minindex = Number(i);
  }
  if (Number(str[i]) > max) {
    max = Number(str[i]);
    maxindex = Number(i);
  }
}
console.log(min);
console.log(maxindex);
console.log(minindex);
console.log(max);
