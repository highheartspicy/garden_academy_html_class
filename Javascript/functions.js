// sum of two numbers
// var a = 81;
// var b = 93;

// var total = a + b;
// console.log(total);

// // written some bunch codes
// var c = 45;
// var d = 22;
// total = c + d;
// console.log(total);

// function sum([condition]) {
//     // codes
// }

// function declaration
// and function calls

// greet(); // function call
// function greet() {
//   // function declaration
//   console.log("hello World");
// }

// console.log(sum);
// sum = 67;

// function sum(x, y) {
//   // codes
//   var sum = x + y;
//   console.log(sum);
// }

// var a = 81;
// var b = 93;
// sum(a, b);

// greet();

// exponent of a number
function exp(base, power) {
  //Math.pow(base, power)
  var value = base ** power;
  return value;
}

// var power = exp(12, 5);
// console.log(power);

// square root of a number
// a ^ 2
// a ^ 1/2
function squareRoot(number) {
  var root = 0.5;
  var sqr = exp(number, root);
  return sqr;
}

// var squares = squareRoot(25);
// console.log(squares);

// nth root of a number
// function nthRoot(number, root) {
//   root = 1 / root;
//   var nthR = exp(number, root);
//   return nthR;
// }

// var nthR = nthRoot(82, 2);
// console.log(nthR);

// quadratic equation
// x1 = -b + (sqr(ab - 4ac)/2a)
// x2 = -b - (sqr(ab - 4ac)/2a)

var result = quadraticEqn(1, 5, 6);
console.log(result);
function quadraticEqn(a, b, c) {
  var sqrB = exp(b, 2); // b ^ 2
  var values = sqrB - 4 * a * c; // b ^ 2 - 4ac
  var square = squareRoot(values); // sqr(b ^ 2 - 4ac)
  var denominator_1 = -b - square; // - b - sqr(b ^ 2 - 4ac)
  var denominator_2 = -b + square; // - b + sqr(b ^ 2 - 4ac)

  var x1 = (denominator_1 / 2) * a; // ( - b - sqr(b ^ 2 - 4ac)) / 2a
  var x2 = (denominator_2 / 2) * a; // ( - b + sqr(b ^ 2 - 4ac)) / 2a

  return "The roots of the equation are; x1: " + x1 + " and x2: " + x2;
}
