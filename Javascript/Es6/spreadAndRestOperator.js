// spread Operator
// copying array
const arr = [1, 2, 3];
const copy_of_arr = [...arr];
// console.log(arr, copy_of_arr);

// concatinating arrays
const arr1 = ["Orange", "apple", "mango"];
const arr2 = ["Pupkin", "Garden Egg", "Water Leaf"];

const food = [...arr1, ...arr2];
// console.log(food);

// spread into function
// const numbers = [1, 2, 3];
// const sum = (a, b, c) => a + b + c;
// var total = sum(...numbers);
// console.log(total);

// rest functions
// const numbers = [1, 2, 3, 5, 7, 3, 7, 8, 5, 8, 5, 8];
// const numbers2 = [1, 2, 57, 4, 7, 4];
// const sum = (x) => {
//   var total = 0;
//   for (let i = 0; i < x.length; i++) {
//     total += x[i];
//   }
//   return total;
// };

// var total = sum(numbers);
// console.log(total);

const numbers = [1, 2, 3, 5, 7, 3, 7, 8, 5, 8, 5, 8];
// const numbers2 = [1, 2, 57, 4, 7, 4];
// const sum = (...x) => {
//   return x.reduce((accumulator, number) => accumulator + number, 0);
// };

// var total = sum(...numbers2);
// console.log(total);

// rest
// var total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }
// console.log(total);
var acc = numbers.reduce(function (accumulator, content) {
  return accumulator + content;
}, 0);
console.log(acc);
