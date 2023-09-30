// push
var artistes = []; // user artiste list...

// console.log(artistes);
// artistes.push("Wizkid");
// artistes.push("Davido");
// artistes.push("Phyno");
// artistes.push("Burna Boy");

// console.log(artistes);
// artistes.push("Tuface");
// console.log(artistes);

// pop
var arr = ["bmw", "spider", "lexus", "ferrari", "benz"]; // bmw => 0, spider => 1, ..., benz => 4
// console.log(arr);
// arr.pop();
// console.log(arr);

// shift
// console.log(arr);
// arr.shift();
// console.log(arr);

// unshift
// arr.unshift("VolkWagen");
// console.log(arr);

// concat
// var fruits = ["orange", "mango", "grape", "banana"];
// var vegetables = ["garden egg", "pupkin", "waterleaf", "bitterleaf"];

// var farm_produce = fruits.concat(vegetables);
// console.log(farm_produce);

// slice
// var some_fruits = fruits.slice(2); // extraction
// var some_fruits = fruits.slice(); // copy of fruits array
// var some_fruits = fruits.slice(-1);
// var some_fruits = fruits.slice(-3, -1);
// console.log(some_fruits);

// splice
var fruits = ["orange", "mango", "grape", "banana"];
// fruits.splice(2, 3);
// console.log(fruits);
// var vegetables = ["garden egg", "pupkin", "waterleaf", "bitterleaf"];
// vegetables.splice(1, 0, "date", "cashew");
// console.log(vegetables);
// var removed_vegetables = vegetables.splice(2);
// console.log(removed_vegetables, vegetables);

// forEach
// vegetables.forEach(function (vegetable) {
//   console.log(
//     "The length of the string '" + vegetable + "' is " + vegetable.length
//   );
// });

// map
// var len_of_string = vegetables.map(function (vegetable) {
//   return vegetable.length;
// });

// console.log(len_of_string);

// filter
// strings greater than or equal to 9
// var result = vegetables.filter(function (vegetable) {
//   return vegetable.length >= 9;
// });

// console.log(result);

// reduce
// the sum of the length of all the elements in the vegetables array.
// var sum = 0;
// for (var i = 0; i <= 10; i++) {
//   // 0 + 1 + 2 + 3 + 4 + ... + 10;
//   sum += i;
// }
// console.log(sum);
// var sum_of_length = vegetables.reduce(function (sum, vegetable) {
//   return sum + vegetable.length;
// }, 0);
// console.log(sum_of_length);

// find
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // a % 2 => 0
// var first_even_occurance = numbers.find(function (number) {
//   return number % 2 === 0;
// });

// console.log(first_even_occurance);

// indexOf
// var vegetables = ["garden egg", "pupkin", "waterleaf", "bitterleaf"];
// var index_of_pupkin = vegetables.indexOf("pupkinw");
// console.log(index_of_pupkin);

// sort
var numbers = [2, 4, 5, 2, 4, 3, 9, 3, 8, 5, 4, 7];
// ascending order
// numbers.sort();
// numbers.sort(function (a, b) {
//   return a - b;
// });
// descending order
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);

// revers
var names = ["Chijioke", "Timilayo", "Eze", "Adamu", "Yusuf", "Yemi"];
names.reverse();
console.log(names[0]);
console.log(names);
