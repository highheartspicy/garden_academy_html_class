// const my_promise = new Promise((resolve, reject) => {
//   const procces = false; // 5mins
//   if (procces) {
//     resolve("Success");
//   } else {
//     reject("failure");
//   }
// });

// // .then

// my_promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch API
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
