var box = document.querySelector(".box");
var toggle_button = document.getElementById("toggle_box");

// toggle_button.addEventListener("click", function () {
//   var cur_state = this.textContent;
//   if (cur_state === "Show Box") {
//     // if it is hidden
//     this.textContent = "Hide Box"; // this
//     box.classList.add("justify-center");
//     box.classList.remove("hide");
//   } else {
//     this.textContent = "Show Box"; // this
//     box.classList.remove("justify-center");
//     box.classList.add("hide");
//   }
// });

// toggle
toggle_button.addEventListener("click", function () {
  var cur_state = this.textContent;
  if (cur_state === "Show Box") {
    // if it is hidden
    this.textContent = "Hide Box"; // this
  } else {
    this.textContent = "Show Box"; // this
  }
  box.classList.toggle("hide");
});
