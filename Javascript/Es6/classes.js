// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   identify() {
//     console.log(`Hello ${this.name}, you are ${this.age} years old!`);
//   }
// }

// const person = new Person("Tunde", 34);
// const person1 = new Person("Frank", 21);

// person.identify();
// person1.identify();

// class GreetTunde {
//   constructor() {
//     this.name = "Tunde";
//     this.age = 25;
//   }

//   greet() {
//     console.log(
//       `Hello ${this.name}, I heard that you are ${this.age} years old.`
//     );
//   }
// }

// const tunde = new GreetTunde();
// const tunde1 = new GreetTunde();
// console.log("This is the first Tunde");
// tunde.greet();
// console.log("This is the second Tunde");
// tunde1.greet();

// Inheritance
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   identify() {
//     console.log(`{first_name: ${this.name}, age: ${this.age}}`);
//   }

//   get userName() {
//     console.log(`${this.name}`);
//   }

//   get userAge() {
//     console.log(`${this.age}`);
//   }
// }

// class Student extends User {
//   constructor(name, age, student_id) {
//     super(name, age);
//     this.student_id = student_id;
//   }

//   report() {
//     console.log(
//       `{first_name: ${this.name}, age: ${this.age}, student_id: ${this.student_id}}`
//     );
//   }
// }

// const student1 = new Student("Udoka", 22, 4567);
// student1.userName;
// student1.userAge;
// student1.report();

// static methods
// class Arithmetic {
//   static square(a) {
//     return a * a;
//   }

//   static add(...a) {
//     //
//   }

//   static pow(a, b) {
//     //
//   }
// }

// const sqr = Arithmetic.square(2);
// console.log(sqr);

// getters and setters
class Student {
  constructor() {
    this.name = "";
  }
  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }
}

const student = new Student();
// student.setName("Ruth");
student.setName = "Ruth";
console.log(student.getName);
