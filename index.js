function dateOfBirth(yearOfBirth) {
  let currentYear = new Date().getFullYear();
  let getDate = currentYear - yearOfBirth;
  return getDate;
}

var name = "dev";
var age = "infinity";
var person = `hello my name is ${name} and i am ${age} years old`;
console.log(person);

const data = [
  { name: "lanre", age: 30, complexion: "fair" },
  { name: "ayo", age: 19, complexion: "black" },
  { name: "dev", age: 25, complexion: "brown" },
];

module.exports = {
  dateOfBirth,
  data
};