// const arr = [1, 2, 3, 4, 5, 6];
// const [a, b, c] = arr;

// console.log(a, b, c);

// const arr = [1, 2, 3, 4, 5, 6];
// const [a, b, ...c] = arr;

// console.log(a, b, c);
// var sum = 0;
// c.map(function (item) {
//   sum += item;
// });
// console.log(sum);

// const arr = [1, 2, 11];
// const [a, b, c = 3] = arr;

// console.log(a, b, c);

// object destructuring
// const student = {
//   first_name: "John",
//   last_name: "Doe",
//   age: 34,
// };

// const { first_name, last_name } = student;
// console.log(`His full name is ${first_name} ${last_name}`);

// alias
// const student = {
//   first_name: "John",
//   last_name: "Doe",
//   age: 34,
// };

// const { first_name, last_name: surname, age = 18 } = student;
// console.log(`His full name is ${first_name} ${surname}`);
// console.log(age);

const student = {
  score: { exam: 54, ca1: 22, ca2: 23 },
  name: "Chinedu Ike",
};

const {
  score: { exam, ca1, ca2 },
  name,
} = student;
console.log(exam);
// console.log(student.score.exam);
