// for loop
// 1. ______________________
// 2. ______________________
// .
// .
// .
// 1000. ___________________

// for(declaration; condition; increment or decrement) {
//     // code block
//     // block-scoped
// }

// for (var i = 0; i <= 20; i++) {
//   console.log(i);
// }

// infinite loop
// for loop
// for (var i = 1; i <= 1000; i++) {
//   // i = i + 1;
//   console.log(i + "._______________________");
// }

// keys in loops
// continue
// break

// print the list and stop when i equals 50
// for (var i = 1; i <= 1000; i++) {
//   // i = i + 1;
//   // conditionals
//   console.log(i + "._______________________");
//   if (i === 50) {
//     break; // halting the loop
//   }
// }

// while
var students = [
  {
    // index 0
    name: "John",
    is_above_18: true,
  },
  {
    // index 1
    name: "Linda",
    is_above_18: false,
  },
  {
    // index 2
    name: "grace",
    is_above_18: true,
  },
]; // 3 - 1 = 2

// counting => 1
// arrays => 0, 1, 2
// .length
// console.log(students.length);
// console.log(students[0]);

var count = 0;
// while (count < students.length && students[count].is_above_18 === true) {
//   // students[count].is_above_18
//   console.log(count);
//   console.log(students[count].name);
//   count++; // count = count + 1
// }
// while (count < students.length) {
//   // students[count].is_above_18
//   if (students[count].is_above_18 !== true) {
//     count++;
//     continue;
//   }
//   console.log(students[count].name);
//   count++; // count = count + 1
// }

// while (count <= 10) {
//   if (count === 7) {
//     count++;
//     continue;
//   }
//   console.log(count);
//   count++;
// }

// do... while
// generating unique ids for student
// var male = false;
// var flag = false;
// var count = 0;
// do {
//   // generated the id
//   // check for it's existence
//   // if it exists we set to true
//   // else set flag to false
//   if (male) {
//     flag = true;
//   } else {
//     flag = false;
//   }
//   if (count === 6) {
//     male = false;
//   }

//   console.log("is male");
//   count++;
// } while (flag);

var student_data = {
  first_name: "John",
  last_name: "Willos",
  age: 29,
};

// console.log(student_data.first_name, student_data.last_name, student_data.age);
// console.log(student_data[first_name]);

// for (var key in student_data) {
//   var value = student_data[key];
//   console.log("Student's " + key + ": " + value);
// }

// students.map((student) => {
//   for (var key in student) {
//     var value = student[key];
//     console.log("Student's " + key + ": " + value);
//   }
// });

// write a code that lists out all the even numbers from 1 to 100
// write a code that lists out all the prime numbers from 1 to 100
// write a code that lists out all the numbers divisible by 5 from 1 to 1000

// write a code that lists out all the odd numbers from 1 to 100
for (var i = 1; i <= 100; i++) {
  // divide a number by 2, if even => 0 as remainder;
  // else => odd
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
