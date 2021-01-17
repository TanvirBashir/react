//----------Destructuring objects------------//

var user = {
  id: 42,
  firstname: "Sam",
  lastname: "Fisher",
  details: {
    squadname: "Fourth Echelon",
    plane: "Paladin",
    daughter: "Sarah",
  },
};

var {
  id,
  details: { plane: wings },
} = user;

console.log(id); // 42
console.log(wings); // Paladin
console.log("*************"); // break

// Assignment

var user = {
  id: 56,
  is_verified: true,
};

var { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true
console.log("*************"); // break

// Assigning default values

const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
console.log("*************"); // break

// Destructuring as parameter

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}
function userLname({ fullName: { lastName: name } }) {
  return name;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe is John"
console.log(userLname(user)); // "Doe"
console.log("*************"); // break

// Destructuring abd mapping

const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

people.map(({ name: n, family: { mother: m, brother: b } }) =>
  console.log(
    `${m} > ${n} ${
      typeof b !== "undefined" ? `has brother called '${b}'` : "has only son"
    }`
  )
);

console.log("*************"); // break

people.map(({ name: n, family: { mother: m, sister: s } }) =>
  console.log(
    `${m} > ${n} ${
      typeof s !== "undefined" ? `has sister called '${s}'` : "has no sister"
    }`
  )
);

//combined array and object destructuring

const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
