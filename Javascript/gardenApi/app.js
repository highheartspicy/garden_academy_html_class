// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/6/comments", true);
// xhr.onload = function () {
//   if (this.status === 200) {
//     console.log(this.responseText);
//     console.log("total comments: " + JSON.parse(this.responseText).length);
//   }
// };

// xhr.send();

const http = new gardenApi();

// get posts
http.get(
  "https://jsonplaceholder.typicode.com/posts",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);

// get post by id
// http.get("https://jsonplaceholder.typicode.com/posts/30");
