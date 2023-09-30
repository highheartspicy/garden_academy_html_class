// handling errors

// throw new Error("This is a new error");

// try and catch blocks
// try {
//   // write codes
//   //   var x == 34;
//   var greet = "Hello";
//   greet();
// } catch (error) {
//   // throws
//   //   console.log(error);
//   console.log("An error occured");
// }

// try {
//   var a = 1 / 0;
//   console.log(a);
// } catch (error) {
//   console.log(error);
//   console.log("error");
// }

// specific errors
// try {
//   var greet = "hello";
//   greet();

//   var arr = [1, 2, 4, 54, 5, 6];
//   console.log(arr[10]);
// } catch (TypeError) {
//   console.log(TypeError);
//   console.log("error");
// }

// finally block
try {
  var greet = "Hello Tunde";
  //   greet();
} catch (error) {
  console.log("error");
} finally {
  console.log("Hello World");
}
