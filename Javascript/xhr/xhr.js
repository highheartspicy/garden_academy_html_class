// access multiple documents
// access single document

// grab our buttons
document.getElementById("get_students").addEventListener("click", getStudents);
document.getElementById("get_student").addEventListener("click", getStudents);
var students_body = document.getElementById("students");
var student_body = document.getElementById("student");
var input = document.getElementById("search");

function getStudents() {
  // assess input value
  var search = input.value;
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "students.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const result = JSON.parse(this.response);
      var response = "";
      var flag = "students";
      result.forEach((student) => {
        if (search.length > 0) {
          // if (student.first_name == search) {
          //   flag = "student";
          //   response = template(student);
          //   return;
          // } else if (student.last_name == search) {
          //   flag = "student";
          //   response = template(student);
          //   return;
          // } else if (student.id == search) {
          //   flag = "student";
          //   response = template(student);
          //   return;
          // }
          if (
            student.first_name == search ||
            student.last_name == search ||
            student.id == search
          ) {
            flag = "student";
            response = template(student);
            return;
          }
        } else {
          response += `<ul>
                    <li><strong>Id:</strong>${student.id}</li>
                    <li><strong>First Name:</strong>${student.first_name}</li>
                    <li><strong>Last Name:</strong>${student.last_name}</li>
                  </ul>`;
        }
        // template
        // response += `<ul>
        //               <li><strong>Id:</strong>${student.id}</li>
        //               <li><strong>First Name:</strong>${student.first_name}</li>
        //               <li><strong>Last Name:</strong>${student.last_name}</li>
        //             </ul>`;
      });

      if (flag == "students") {
        students_body.innerHTML = response;
      } else {
        student_body.innerHTML = response;
      }
      // console.log(result);
      // console.log(this.response);
    } else {
      console.log(this);
    }
  };

  function template(student_data) {
    response = `<ul>
                      <li><strong>Id:</strong>${student_data.id}</li>
                      <li><strong>First Name:</strong>${student_data.first_name}</li>
                      <li><strong>Last Name:</strong>${student_data.last_name}</li>
                    </ul>`;
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
