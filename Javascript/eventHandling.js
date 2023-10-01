var button = document.getElementById("click_me");

// attach an event to this element
// button.addEventListener("click", handleClick);

// function handleClick() {
//   //   alert("I have been clicked");
//   //   button.style.backgroundColor = "red";
// }

// button.addEventListener("click", function () {
//   alert("I have been clicked again");
// });

// increament and decreament
// grab the buttons
// handle the click event for both buttons
// get text content of the display
// access and manipulate the text content in the event handlers of both buttons

/**
 * 1. grab buttons
 */
var increament = document.getElementById("increament"); // increament
var decreament = document.getElementById("decreament"); // decreament
var display = document.querySelector("#content"); // display

/**
 * 2. handle the click events
 */
//  increament.addEventListener("click", handleIncreament);
//  decreament.addEventListener("click", handleDecreament);

increament.addEventListener("click", function () {
  countUp(true);
});
decreament.addEventListener("click", function () {
  countUp(false);
});

// function handleIncreament() {
//   var content = display.textContent; // "0", "1"
//   try {
//     var count = parseInt(content) + 1; // 0, 1
//     display.textContent = count;
//   } catch (TypeError) {
//     console.log("error");
//   }
// }

// function handleDecreament() {
//   var content = display.textContent;
//   var count = parseInt(content) - 1;
//   display.textContent = count;
// }

function countUp(flag) {
  var content = display.textContent; // "0", "1"
  try {
    var count = flag ? parseInt(content) + 2 : parseInt(content) + 1; // 0, 1
    // var count = 0;
    // if (flag) {
    //   count = parseInt(content) + 1;
    // } else {
    //   count = parseInt(content) - 1;
    // }
    display.textContent = count;
  } catch (TypeError) {
    console.log("error");
  }
}
