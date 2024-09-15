//METHOD
var user = {
    name: "umair",
    age:18,
}
function sayhi(){
    alert("hellow");
}
user.message = sayhi; 
document.getElementById("para").innerHTML = `hi ${user.name}`
document.getElementById("btn").onclick = user.message;




//METHOD
// Copies properties from a source object to a target object
// Object.assign(target, source)

/// Create Target Object
const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Create Source Object
  const person3 = {firstName: "Anne",lastName: "Smith"};
  
  // Assign Source to Target
  Object.assign(person2, person3);

  // Display Target
let text = Object.entries(person2);
document.getElementById("para2").innerHTML = text;
