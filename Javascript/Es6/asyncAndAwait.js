async function myIterate() {
  //   var sum = 0;
  //   var count = 1;
  //   while (count <= 10000000000) {
  //     sum += count;
  //     count++;
  //   }
  var body = document.querySelector("ul");
  var contents = "";
  const get = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      json.map(
        (item) =>
          (contents += `<li>{${item.userId}, title: ${item.title}, completed: ${item.completed}}</li>`)
      );
    })
    .catch((error) => console.log(error));
  body.innerHTML = contents;
  console.log(get);
}

myIterate();
console.log("count completed");
