// 1. Create 2 persons which will contain name, surname and age. First person name should be Caroline and second person name will be Maya- object
document.write(`Task 1 <br>`);

let firstPerson = {
  name: "Caroline",
  surname: "Davids",
  age: 23,
};

let secondPerson = {
  name: "Maya",
  surname: "James",
  age: 56,
};

document.write(firstPerson.surname);
console.log(secondPerson.name);

document.write(`<br> Task 2 <br>`);
// 2. Store persons in 2 separate variables as strings. Format: `Name Surname` is `age` years old . And display their value. - document.write
const firstPersonDetails = `${firstPerson.name} ${firstPerson.surname} is ${firstPerson.age} years old.`;
document.write(firstPersonDetails);

// created an element in HTML and displayed the value of firstPersonDetails
const firstElementFromHtml = document.querySelector(".first");
firstElementFromHtml.innerHTML =
  firstPersonDetails +
  "- Note: the value of firstPersonDetails will be passed to the selected HTML element - class -> first";

// 3. create a new variable called isGreater and give it the value of undefined;
document.write(`<br> Task 3 <br>`);
let isGreater = undefined;
console.log(isGreater);
// 4. Create a function called compareAge with 2 arguments. If the first argument is greater than the second it will return true
//  otherwise return false.
document.write(`<br> Task 4 <br>`);
//Used arrow function
const compareAge = (a, b) => {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};
// 5. call compareAge and pass first person age and second person age. Store the result value in isGreater variable.
document.write(`<br> Task 5 <br>`);
isGreater = compareAge(firstPerson.age, secondPerson.age);
console.log(isGreater);

// 6.Change the age of the second person - current age + 50 years.
document.write(`<br> Task 6 <br>`);
secondPerson.age = secondPerson.age + 50;
console.log(secondPerson);

// 7. Create a new variable called persons and assign an empty array.
document.write(`<br> Task 7 <br>`);
const persons = [];

// 8. push person 1 and person 2 objects to persons array.
document.write(`<br> Task 8 <br>`);
persons.push(firstPerson, secondPerson);
console.log(persons); //Array of objects

// 9 . Create a new array called newPersons and assign 2 new persons(objects-
//  which will include name, surname, age) then create a new variable called allPersons(array) and add as value persons and newPersons.
document.write(`<br> Task 9 <br>`);

const newPersons = [
  {
    name: "Maria",
    surname: "Hunt",
    age: 43,
  },
  {
    name: "Christian",
    surname: "Jones",
    age: 63,
  },
];

const allPersons = [...persons, ...newPersons]; //Use spread operator
console.log(allPersons);
// 10. Loop through allPersons and display the value of the youngest person Format : the youngest person is `Name Surname` which is `age` old.
document.write(`<br> Task 10 <br>`);

// 11.Create a new variable called overFifty and filter all the persons which are over 50 years old. For each person which is over fifty display it's value. Format: `Name` is over 50.
document.write(`<br> Task 11 <br>`);

// 12. Loop through allPersons array, find and remove the one which has name Caroline.
document.write(`<br> Task 12 <br>`);

// 13. Add an event listener and check when  person 2 name(Maya- from inital variable, not from allPersons array) will change it's name to any other value. When a change will be detected an alert will pop up to notify. Format: Person 2 has changed it's name. New name is `Name`.
document.write(`<br> Task 13 <br>`);

// 14. Change person 2 name from Maya to Charlotte.
document.write(`<br> Task 14 <br>`);
