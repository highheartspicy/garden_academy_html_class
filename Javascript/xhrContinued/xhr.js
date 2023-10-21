document.getElementById("get_student").addEventListener("click", getStudents);
var result_container = document.getElementById("result_container");
var input = document.getElementById("search");

function getStudents() {
  // assess input value
  var search = input.value.toLowerCase().trim();
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "students.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const result = JSON.parse(this.response);
      var response = "";
      result.forEach((student) => {
        if (search.length > 0) {
          // if (
          //   student.first_name.toLowerCase() == search ||
          //   student.last_name.toLowerCase() == search ||
          //   student.id == search
          // )
          var first_name =
            student.first_name !== undefined
              ? student.first_name.toLowerCase()
              : "";
          var last_name =
            student.last_name !== undefined
              ? student.last_name.toLowerCase()
              : "";
          var id = student.id !== undefined ? student.id : "";

          // var regex = /wis/;
          // var str = "Wisdom";

          var first_name_match = first_name.includes(search);
          var last_name_match = last_name.includes(search);
          if (first_name_match || last_name_match || id == search) {
            response += template(student);
          }
        } else {
          response += template(student);
        }
      });

      if (response.length === 0) {
        response = "No result found.";
      }
      result_container.innerHTML = response;
    } else {
      console.log(this);
    }
  };

  function template(student_data) {
    response = `<ul>
                      <li><strong>Id:</strong>${student_data.id}</li>
                      <li><strong>First Name:</strong>${student_data.first_name}</li>
                      <li><strong>Last Name:</strong>${student_data.last_name}</li>
                    </ul><br>`;
    return response;
  }

  xhr.send();

  // HTTPS STATUS
  // 404 => Not found
  // 200 => Successful
  // 403 => forbidden
  // 500 => internal server error
  // 409 => unauthorized
}
