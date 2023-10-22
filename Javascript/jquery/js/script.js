// document.getElementById()
// document.getElementsByClassName // array
//document.getElementsByTagName // array
// document.querySelector()
// document.querySelectorAll() // array

$("p").html("Changed paragraph Content");
// var paragraph = document.querySelector("p");
// paragraph.innerHTML = "Changed Paragraph Content by Vanila js";

// $(".div1").click(function () {
//   // #div1, p span, div, :nth-last-child(5), "id^='div2'"
//   alert("clicked");
// });

// $("[id^='div2']").click(function () {
//   [(id = div2)];
// });

// $("[id^='div2']").each(function () {
//   $(this).click(function () {
//     var inner_content = $(this).text();
//     alert(inner_content);
//   });
// });

// var div = document.querySelector(".div1");
// div.addEventListener("click", function () {
//   alert("clicked");
// });

// events
// $(".div1").click(function () {
//   $("body").append("<p class='pa'>This is a dynamic paragraph</p>");
// });

// $(document).on("click", ".pa", function () {
//   alert("good");
// });

// $("#select").on("change", function () {
//   console.log($(this).val());
// });

// $("p").on("dblclick", function () {
//   console.log("double clicked");
// });

// effects method
// $("#div2").on("click", function () {
//   $(this).fadeOut();
// });

// $("#div2").on("click", function () {
//   $(this).animate({ height: "150px", width: "150px" }, 2000, function () {
//     $(this).css({ backgroundColor: "blue" });
//   });
// });

// $("#div2").on("click", function () {
//   $(this).fadeTo(2000, 0.4);
// });

// $(".div21").on("click", function () {
//   $(".div2").fadeToggle();
// });

// $(".div21").on("click", function () {
//   $(".div2").toggle();
// });

// htm and css
$(".div21").on("click", function () {
  $(this).toggleClass("nice");
});

// traversing
// each, children , closest

// ajax
$(".div21").on("click", function () {
  $.ajax({
    //   method: "POST",
    //   data: {},
    //   contentType:
    url: "data/text.txt",
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log("the error", error);
    },
  });
});
