document.addEventListener("DOMContentLoaded", function () {
  // set inputs
  // get the display
  var current_input = "";
  var output;
  var output_display = document.getElementById("output_display");
  var input_display = document.getElementById("input_screen");
  var equals_display = document.getElementById("equals");
  output_display.textContent = 0;

  // grab operators and numbers
  document.querySelectorAll(".number, .operator").forEach(function (operand) {
    operand.addEventListener("click", function () {
      var value = operand.dataset.value;
      // handle special characters
      if (value === "c") {
        // clear
        if (current_input.length > 0) {
          current_input = "";
        } else {
          output = "";
          output_display.innerHTML = output;
        }
      } else if (value.toLowerCase() === "backspace") {
        if (current_input.length > 0) {
          current_input = current_input.slice(0, -1);
        }
      } else if (value === "=") {
        try {
          output = eval(current_input);
        } catch (error) {
          output = "NAN";
        }
        // after we hit the equality sign
        output_display.innerHTML = `${output}`;
      } else {
        current_input += value;
      }

      // set display
      // after each input
      equals_display.innerHTML = "=&nbsp;&nbsp;";
      input_display.textContent = current_input;
      try {
        if (value !== "+" && value !== "-" && value !== "*") {
          output_display.textContent = eval(current_input);
        }
      } catch (error) {
        output_display.textContent = "NAN";
      }
    });
  });

  var mode_a = document.getElementById("mode_a");
  var mode_b = document.getElementById("mode_b");
  document.querySelectorAll(".switch_mode").forEach(function (switch_mode) {
    switch_mode.addEventListener("click", function () {
      console.log("clicked");
      if (mode_a.classList.contains("hide")) {
        console.log("removed hide from a");
        mode_a.classList.remove("hide");
        mode_b.classList.add("hide");
      } else if (mode_b.classList.contains("hide")) {
        console.log("removed hide from b");
        mode_b.classList.remove("hide");
        mode_a.classList.add("hide");
      }
    });
  });
});
