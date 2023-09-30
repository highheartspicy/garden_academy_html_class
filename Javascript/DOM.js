var paragraph = document.getElementById("paragraph");
var paragraph2 = document.getElementById("paragraph2");

// get the text contents from paragraph 1
paragraph2.innerHTML = "<b>" + paragraph.textContent + "</b>";
// paragraph2.textContent = "Text content for paragraph 2";
// paragraph.innerHTML = "<b>New content</b>";

paragraph2.style.color = "red";

// create a new element
var new_div = document.createElement("div");
new_div.textContent = "Hello guys";
paragraph.appendChild(new_div);

// var div1 = document.querySelector(".div1");
var div_1 = document.getElementsByClassName("div1");
for (var i = 0; i < div_1.length; i++) {
  div_1[i].style.color = "blue";
  div_1[i].innerHTML = "<strong> This is a strong statement</strong>";
}
