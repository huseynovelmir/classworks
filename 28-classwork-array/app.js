//! task1
// let arr = [1, 2, -3, 6, -4, 10, -23];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     console.log(arr[i]);
//   }
// }
//! task2
// let arr = [1, 2, -3, 6, -4, 10, -23];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);
//! task3
// let arr = [1, 2, -3, 6, -4, 10, -23];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i] ** 2);
// }
// console.log(arr2);
// !task4
// let arr = [1, 2, -3, 6, -4, 10, -23];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr2.push(arr[i] ** 2);
//   }
// }
// console.log(arr2);
// !task5
// let arr = [1, 2, -3, 6, -4, 10, -23];
// let arr2 = [];
// let arr3 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr2.push(arr[i] ** 2);
//   }
//   if (arr[i] > 0) {
//     arr3.push(arr[i] ** 3);
//   }
// }
// console.log(arr2, arr3);
// !task6
// let arr = [1, 2, -3, 6, -4, 10, -23];
// let arr2 = [];
// let arr3 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr2.push(arr[i] ** 2);
//   }
//   if (arr[i] > 0) {
//     arr3.push(arr[i] ** 3);
//   }
// }
// console.log(arr2.reverse(), arr3.reverse());
// !task7
// let arr = [1, 2, -3, 6, -4, 10, -23];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);
// !task8
// let arr = [1, 2, -3, 6, -4, 10, -23];
// let max = 0;
// let second = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] > arr[i + 1] && arr[i] < max) {
//     second = arr[i];
//   }
// }
// console.log(second);
let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];
//! Butun hamsi
// console.log(students);
//! adlari
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }
//! adlari soyadlari
// for (let i = 0; i < students.length; i++) {
//   console.log(`ad: ${students[i].name} soyad: ${students[i].surname}`);
// }
//! kesri olan telebeler
// for (let i = 0; i < students.length; i++) {
//   if (students[i].fail == true) {
//     console.log(`ad: ${students[i].name} soyad: ${students[i].surname}`);
//   }
// }
//! ortalama
// let max = 0;
// for (let i = 0; i < students.length; i++) {
//   if (students[i].avgPoint > max) {
//     max = students[i].avgPoint;
//   }
// }
// for (let j = 0; j < students.length; j++) {
//   if (students[j].avgPoint == max) {
//     console.log(`ad: ${students[j].name} soyad: ${students[j].surname}`);
//   }
// }
//! parol
// let max = 0;
// for (let i = 0; i < students.length; i++) {
//   if (students[i].loginDetail.password.length > max) {
//     max = students[i].loginDetail.password.length;
//   }
// }

// for (let j = 0; j < students.length; j++) {
//   if (students[j].loginDetail.password.length == max) {
//     console.log(`ad: ${students[j].name} soyad: ${students[j].surname}`);
//   }
// }
//! yas
let max = students[0].avgPoint;
let box = "";
for (let i = 0; i < students.length; i++) {
  if (students[i].age == 20) {
    for (let j = 0; j < students[i].teacher.length; j++) {
      box += students[i].teacher[j].name + " ";
    }
    console.log(`ad: ${students[i].name} mualim: ${box}`);
  }
}

// for (let j = 0; j < students.length; j++) {
//   if (students[j].loginDetail.password.length == max) {
//     console.log(`ad: ${students[j].name} soyad: ${students[j].surname}`);
//   }
// }
