// function greet() {
//   console.log("Hello World");
// }

// greet();

// const hi = function () {
//   console.log("first");
// };

// hi();

// const greet = () => console.log("Hello world");
// greet();

// implicit return
// ! => curly braces, return keyword
// const add = function (a, b) {
//     return a + b;
// }
// const add = (a, b) => a + b;
// let sum = add(2, 3);
// console.log(sum);

//  lexical "this" binding
// function countDown() {
//   this.seconds = 0;
//   var self = this;
//   setInterval(function () {
//     self.seconds++;
//     console.log(self.seconds);
//   }, 3000);
// }

// countDown();

function countDown() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 3000);
}

countDown();
