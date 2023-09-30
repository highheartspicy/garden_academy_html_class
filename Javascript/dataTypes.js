// loosely
// dynamically typed language

let amount = 2.3; // decimal
amount = 34; // integer
// console.log(amount);

// primitive data type
// numbers => integers, double, floats, bytes, shorts
var count = 12; // integer, byte, short
var rate = 12.4; // double, float

// String
// char 'a'
// string is a combination of characters
var name = "Francis Doga"; // a string of characters
var school = "Matta Boys";
var template = `rate`;
// console.log(name);

// var str = "Francis";
// console.log(str);

// Boolean
// two values -> true or false
var is_above_18 = true;
var is_male = false;
// console.log(is_male);

// Undefined
var script = undefined;
var tank; // declared -> undefined;
// console.log(tank);

// null
var value = null;
// console.log(value);

// reference Type
// Object
// student
// var first_name = "Ndukaku";
// var last_name = "Adebayo";
// var age = 23;
// var amount_paid = 256.3;
// var gender = "Male";
// var graduated = false;
// console.log(first_name, last_name, age, amount_paid, gender, graduated);
// console.log(first_name);

const student_data = {
  first_name: "Ndukaku",
  last_name: "Adebayo",
  age: 23,
  amount_paid: 256.3,
  gender: "Male",
  graduated: false,
};

// console.log(student_data);
// console.log(student_data.first_name);
// console.log(student_data.graduated);
// console.log(student_data["first_name"]);
// j.s.s 1 -> Emeka Taiwo, ... j.s.s 1
// j.s.s 2 -> Emeka Taiwo, ... j.s.s 2
// Assembly -> Emeka Taiwo in J.s.s 1

// Array
const numbers = [2, 5, 7, 8, 9, 2, 5];
const fruits = ["mango", "Apple", "Orange"];
// console.log(numbers);
// console.log(fruits);

// function
var twist = "Oliver"; // global scoped
function hello(name) {
  console.log(twist);
  return "Hello " + name;
}

const greeting = hello("Timi");
const greet_mark = hello("Mark");
// console.log(greeting);
// console.log(greet_mark);

// date
console.log(new Date());
