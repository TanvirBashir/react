const numbers = [1, 2, 3];
const persons = [
  {
    id: 1,
    name: "Bruce",
    age: 30,
    skill: "React",
  },
  {
    id: 2,
    name: "Clark",
    age: 27,
    skill: "Angular",
  },
  {
    id: 4,
    name: "Diana",
    age: 28,
    skill: "Vue",
  },
  {
    id: 3,
    name: "Tanvir",
    age: 25,
    skill: "React",
  },
];

// forEach() method
// doesnt return a new array, and outputs array items one at a time
const numFive = numbers.forEach((number) => console.log(number * 5));
// console.log(numFive);
// can be manipulated using callback fucntions
const allPerson = persons.forEach((person) =>
  console.log(`Name:${person.name}`)
);

// map() method -------------------------------------------

// logged after the mapping

const mapNumbers = numbers.map((num) => num * 3);

console.log("mapNumbers:", mapNumbers);

// object mapping

const mapPersons = persons.map((person) =>
  console.log(`${person.id} : ${person.name} is ${person.age} years old`)
);

// extracting object properties

const mapPersonsNames = persons.map((person) => person.name);

console.log(`Names:  ${mapPersonsNames}`);

// Filter method

console.log(
  "Evens:",
  numbers.filter((n) => n % 2 == 0)
);
console.log(
  "Odds:",
  numbers.filter((n) => n % 2 !== 0)
);

// object filtering
const filterSkill = persons
  .filter((person) => person.skill === "Vue" || person.skill === "React")
  .map((person) => console.log(`Someone knows  ${person.skill}`));

// sort method

// number array
const sortNumbers = numbers
  .sort((a, b) => (a > b ? -1 : 1))
  .filter((n) => n > 2)
  .map((number) => console.log("number", number));

// sort person by age
const sortedByAge = persons
  .sort((a, b) => (a.age > b.age ? -1 : 1))
  .map((person) => console.log("person", person.age));

// sort person by name alphabet
const sortedByName = persons
  .sort()
  .map((person) => console.log("person", person.name));
