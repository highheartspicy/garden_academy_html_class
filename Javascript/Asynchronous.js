function asyncRead() {
  setTimeout(function () {
    console.log("Done");
  }, 5000);
}

asyncRead();
console.log("Something else");
