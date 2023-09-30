var data = "nice"; // global scope

// function saySomething() {
//   console.log("Say something " + data);
// }

// saySomething();

// local scope
// function saySomething() {
//   var str = "good";
//   console.log("Say something " + data);
// }

// saySomething();
// console.log(str); //error

// if (true) {
//   let name = "Frank";
//   console.log(name);
// }

// console.log(name); // error

function parent() {
  var text = "This is it";

  function child() {
    console.log(text);
  }

  return child;
}

var childFunc = parent();
childFunc();
