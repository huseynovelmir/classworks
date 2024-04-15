// let newName = "";
// function names(name) {
//   let namex = name.trim();
//   newName += name[0];
//   for (let i = 0; i < namex.length; i++) {
//     if (namex[i] == " ") {
//       newName += namex[i + 1];
//     }
//   }
//   return newName;
// }
// console.log(names("My name is Elmir      "));

// let students = [
//   {
//     id: 1,
//     name: "Nurane",
//     surname: "Ismayilzade",
//     age: 21,
//     hobbies: ["music", "walking", "watchingfilm"],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//       { id: 3, name: "cavid" },
//       { id: 4, name: "alisa" },
//     ],
//     loginDetail: { username: "nurana21", password: "nunu123" },
//     gender: "girl",
//     boyfriendGirlfriend: false,
//     fail: false,
//     avgPoint: 88,
//     salaryAZN: 144,
//     university: "BDU",
//   },
//   {
//     id: 2,
//     name: "Gizilgul",
//     surname: "Allahverdiyeva",
//     age: 20,
//     hobbies: ["book", "writing code"],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//       { id: 3, name: "babaxan" },
//       { id: 4, name: "gulshen" },
//     ],
//     loginDetail: { username: "allahverdieva1", password: "salam123" },
//     gender: "girl",
//     boyfriendGirlfriend: true,
//     fail: false,
//     avgPoint: 70,
//     salaryAZN: 100,
//     university: "BDU",
//   },
//   {
//     id: 3,
//     name: "Xanim",
//     surname: "Nuriyeva",
//     age: 21,
//     hobbies: ["book", "music"],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//       { id: 3, name: "hikmet" },
//       { id: 4, name: "gulsen" },
//     ],
//     loginDetail: { username: "xanim123", password: "salamBaku" },
//     gender: "girl",
//     boyfriendGirlfriend: false,
//     fail: false,
//     avgPoint: 80,
//     salaryAZN: 145,
//     university: "BDU",
//   },
//   {
//     id: 4,
//     name: "Minaya",
//     surname: "Binnetova",
//     age: 21,
//     hobbies: ["book", "gaming", "movie", "music"],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//       { id: 3, name: "anar" },
//     ],
//     loginDetail: { username: "binnetova", password: "hello123" },
//     gender: "girl",
//     boyfriendGirlfriend: false,
//     fail: false,
//     avgPoint: 90,
//     salaryAZN: 142,
//     university: "BDU",
//   },
//   {
//     id: 5,
//     name: "Sabina",
//     surname: "Hatamli",
//     age: 21,
//     hobbies: ["shopping", "listen to music"],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//       { id: 3, name: "Mirvari" },
//     ],
//     loginDetail: { username: "sebine123", password: "salam123" },
//     gender: "girl",
//     boyfriendGirlfriend: true,
//     fail: false,
//     avgPoint: 81,
//     salaryAZN: 146,
//     university: "BDU",
//   },

//   {
//     id: 6,
//     name: "Ləman",
//     surname: "Şamilova",
//     age: 20,
//     hobbies: [
//       "watching movies",
//       "reading books",
//       "painting",
//       " walking",
//       " listen to music",
//     ],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//     ],
//     loginDetail: { username: "lemanshamilova", password: "salamBaku" },
//     gender: "girl",
//     boyfriendGirlfriend: false,
//     fail: false,
//     avgPoint: 85.8,
//     salaryAZN: 145,
//     university: "BDU",
//   },
//   {
//     id: 7,
//     name: "Narmin",
//     surname: "Musayeva",
//     age: 21,
//     hobbies: ["book", "gaming", "painting", "walking"],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//       { id: 3, name: "fidan" },
//       { id: 4, name: "Irada" },
//     ],
//     loginDetail: {
//       username: "narmin0",
//       password: "narmin01",
//     },
//     gender: "girl",
//     boyfriendGirlfriend: false,
//     fail: false,
//     avgPoint: 80,
//     salaryAZN: 196,
//     university: "BDU",
//   },

//   {
//     id: 8,
//     name: "Fatima",
//     surname: "Akhundzada",
//     age: 20,
//     hobbies: ["drawing", "sleeping"],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//       { id: 3, name: "Valida" },
//     ],
//     loginDetail: { username: "aynur123", password: "salamBaku" },
//     gender: "girl",
//     boyfriendGirlfriend: true,
//     fail: false,
//     avgPoint: 76,
//     salaryAZN: 100,
//     university: "BDU",
//   },
//   {
//     id: 9,
//     name: "Elmir",
//     surname: "Huseynov",
//     age: 21,
//     hobbies: ["book", "ice skating", "Tennis", "Karting"],
//     student: true,
//     teacher: [
//       { id: 1, name: "Gurban" },
//       { id: 2, name: "Hajar" },
//       { id: 3, name: "Morad" },
//       { id: 4, name: "Fikrat" },
//     ],
//     loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
//     gender: "man",
//     boyfriendGirlfriend: false,
//     fail: true,
//     avgPoint: 76,
//     salaryAZN: 120,
//     university: "BDU",
//   },
//   {
//     id: 10,
//     name: "Fidan",
//     surname: "Rehimli",
//     age: 21,
//     hobbies: ["book", "gaming"],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//       { id: 3, name: "Turan" },
//     ],
//     loginDetail: { username: "fidan123", password: "fidanrahimli" },
//     gender: "girl",
//     boyfriendGirlfriend: true,
//     fail: true,
//     avgPoint: 75,
//     salaryAZN: 98,
//     university: "BDU",
//   },
//   {
//     id: 11,
//     name: "Aynur",
//     surname: "Aynurova",
//     age: 20,
//     hobbies: ["book", "gaming"],
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//     ],
//     loginDetail: { username: "aynur123", password: "salamBaku" },
//     gender: "girl",
//     boyfriendGirlfriend: true,
//     fail: true,
//     avgPoint: 81,
//     salaryAZN: 120,
//     university: "BDU",
//   },

//   {
//     id: 12,
//     name: "Elman",
//     surname: "Muradov",
//     age: 20,
//     hobbies: [
//       "book",
//       "gaming",
//       "sking",
//       "wrestling",
//       "swiming",
//       "arguing about philosophy",
//       "solving sudoku",
//       "hiking",
//       "walking",
//     ],
//     student: true,
//     teacher: [
//       { id: 1, name: "gurban" },
//       { id: 2, name: "hajar" },
//       { id: 3, name: "jale" },
//       { id: 4, name: "akhmed" },
//     ],
//     loginDetail: { username: "elman17", password: "elman12345" },
//     gender: "girl",
//     boyfriendGirlfriend: false,
//     fail: true,
//     avgPoint: 76,
//     salaryAZN: 100,
//     university: "BDU",
//   },
// ];
// students.forEach((element) => {
//   console.log(element.loginDetail.password.padEnd(3, "*"));
// });

// let contries = ["azerbaijan", "almania", "albania"];
// for (let i = 0; i < contries.length; i++) {
//   if (contries[i][0] == contries[contries.length - 1]) {
//     console.log(contries[i][contries.length - 1]);
//   }
// }
// let arr = [1, 2, 10, 3, 4, 5];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);
// let newArr = [];
// let ortalama = 0;
// let score = [
//   { name: "Ali", scores: [90, 85, 92] },
//   { name: "Davud", scores: [100, 100, 100] },
//   { name: "Mammal", scores: [75, 80, 85] },
//   { name: "Camil", scores: [90, 95, 85] },
// ];
// score.forEach((el) => {
//   let student = el.scores;
//   console.log(el.scores);
//   ortalama+= el.
// });
// console.log(ortalama);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(3, 4));
