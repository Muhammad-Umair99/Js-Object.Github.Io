//object property

var student = {
    name: "umair",
    age: 18,
    study: "computer science",
    year: 2024,
  }
  student.age = 20;
  delete student.year;  
  document.querySelector("#para").innerHTML = `${student.name} is ${student.age} year old and ${student.study} in ${student.year}`;

  // Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a Property
Object.defineProperty(person, "year", {value:"2008"});
console.log(person);

// Create an Object:
const person1 = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change a Property
Object.defineProperty(person1, "language", {value : "NO"});
console.log(person1);
