//WHAT IS AN JS OBJECT
//1) A JS OBJECT IS LIKE A REAL WORLD ENTITY HAVING STATE  ADN BEHAVIOR,
//FOR EXAMPLE,A CAR . WE CAN TAKE CAR AS AN OBJECT .IT WILL HAVE A STATE
//LIKE COLOR AND MODEL.IT WILL ALSO HAVE BEHAVIOR LIKE ACCELERATINF ADN BRAKE.
//2) JS IS A TEMPLATE BASED AND WE CAN CREATE OBJECTS WITHOUT A NEED OF HAVING CLASS.

//GENERALLY OBJECT IS ACCOMPAINED BY CLASS THAT DEFINES AN OBJECTS BLUE PRINTS
//BUT JS DOES NOT REQUIRE ANY CLASS TO BE DEFINED FOR ADN OBJECTS.

//CREATE A JS OBJECT
//THER ARE THREE DIFFERENT WAYS OF CREATING A JS OBJECT

// 1) USE OBJECT LITERAL

  var student = {
    name: "umair",
    age: 18,
    study: "computer science",
    year: 2024,
  }

  document.querySelector("#para").innerHTML = `${student.name} is ${student.age} year old and ${student.study} in ${student.year}`;

  //USE THE KEYWORD "NEW OBJECT"
  var student = new Object();
  student.name = "umair",
  student.age = 18,
  student.study = "computer science"
  student.year = 2024,

  document.querySelector("#para").innerHTML = `${student.name} is ${student.age} year old and ${student.study} in ${student.year}`;


  //USE AN OBJECT CONSTRUCTOR
// Object constructor
function stud(name, age, study, year) {
  this.name = name;
  this.age = age;
  this.study = study;
  this.year = year; 
}

// Instantiate the object using the `new` keyword
var student = new stud("umair", 18, "computer science", 2024);

// Update the innerHTML of the element with id "para"
document.querySelector("#para").innerHTML = `${student.name} is ${student.age} years old and studies ${student.study} in ${student.year}.`;


