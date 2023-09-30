// conditional statements

// if(condition) {
//     // code
// }

// if statement
var gender = "Female";
var allowed = false;
if (gender == "Male") {
  allowed == true;
}

// console.log("Code continues");

// if ... else statement
var not_allowed;
if (gender == "Male") {
  not_allowed = false;
} else {
  not_allowed = true;
}

// console.log(not_allowed);

// esle ... if
// grading system
// A, B, C
// A -> ^70
// B -> >= 60 and <= 69 { 60, 61, ..., 69 }
// C -> >= 50 and <= 59
var score = 65;
// if (score >= 70) {
//   // !>, !=
//   console.log(
//     "Excellent, above average. You have an A for a score of: " + score
//   );
// } else if (score >= 60 && score <= 69) {
//   console.log(
//     "Nicely done, you did well. You have a B for a score of: " + score
//   );
// } else if (score >= 50 && score <= 59) {
//   console.log("Good, You can do better. You have C for a score of* " + score);
// } else {
//   console.log("Work harder. You score is: " + score);
// }

// switch
var time_of_day = 12;
switch (time_of_day) {
  case 12:
    console.log("Good afternoon");
    break;
  case 14:
    console.log("Good evening");
    break;
  case 22:
    console.log("Good Night");
    break;
  default:
    console.log("Good Morning");
}
