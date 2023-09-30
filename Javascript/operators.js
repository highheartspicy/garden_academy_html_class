// Arithmetic operators
// addition
var ca1 = 12;
var ca2 = 14;
var exam = 45;
var total = 0;
total = ca1 + ca2 + exam; // addition, contenating operator
// console.log(total);

// multiplication
// console.log(ca1 * ca2); // *

// division
// console.log(ca1 / 2);

// subtraction
// console.log(total - ca1 - ca2);

// modulus
/**
 * 6/2 => 3
 * 6%2 => 0
 * 7%2 => 1
 * a%b => c -> remainder
 */

// console.log(ca2 % 3);

// console.log(12 ** 2);
// console.log(Math.pow(12, 2));

// Comparison
// equality operator
// ==, ===
// console.log(23 == 12); // false
// console.log(12 == 12); // true
// console.log(12 == "12"); // true
// console.log(12 === "12"); // false

// !==, !=
// console.log(12 != 12); // false
// console.log(12 != 2); // true
// console.log(12 != "12"); // false
// console.log(12 !== "12"); // true

// greater than  >
// console.log(12 > 34); // false
// console.log(12 > 12); // false

// less than <
// console.log(34 < 67); // true

// >= greater than or equal to
// 12 greater than 12 or 12 == 12?
// console.log(12 >= 12); // a >= b {b, c, ...}, b = a // true

// <= less than or equal to
// console.log(14 <= 22); // 14 is less than 22 but 12 is not equal 22
// console.log(13 <= 2); // false

// Logical operators
// AND -> &&, &
// true and true => true
// true and false => false
// false and true => false
// false and flase => false
// falsy and falsy => true

// 0 (false) && 0 (false) => false
// console.log(12 == 12 && 3 == 3); // true
// console.log(12 == 12 && 12 == 3); // false
// console.log(12 == 3 && 4 == 5); // false

//  false       false
// if (12 == 3 && 4 == 5) {
//   console.log("valid");
// } else {
//   console.log("invalid");
// }

// OR -> ||
// true or true = true
// true or false = true
// false or true = true
// false or false = false
// falsy or falsy = true
// console.log(12 == 3 || 12 === 12); // true
var score = 50;
// console.log(score >= 50); // OR true

// Logical NOT => NOT GATE => !
// !true -> false
// !false -> true
// console.log(!true); //false
// console.log(!false); // true

// assignment operators
var input = 12; // =
// add assign
input += 2; // input = input + 2;
// console.log(input);
var value = 3;
// multiply assign
value *= 3;
// console.log(value);
// subtract assign
// divide assign

// incremental and decremental operator
var x = 2;
var y = 6;

// console.log(x++); // x, -> x
// console.log(x);
// console.log(++x); // x = x + 1;

// decrement
// console.log(y--);
// console.log(--y);

// condition ? true : false
var z = x >= 6 ? true : false;
console.log(z);
var age = 18;
// if age is greater than or equal to 18, assign "Adult" else assign "Minor";
var phase = age >= 18 ? "Adult" : "Minor";
