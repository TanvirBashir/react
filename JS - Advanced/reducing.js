// reduce method
// accumulator(initialValue) + current value = returnedValue(current)
// returnedValue(prev) + current value = returnedValue(current)
// returnedValue(prev)  + current value = returnedValue(current)

// 0 + 1 = 1
// 1 + 3 = 4
// 4 + 5 = 9

let initialValue, theArray;

// Handling array-------------------------------------

theArray = [1, 3, 5];
initialValue = 0;
const totalNumber = theArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(totalNumber);

// Array to modified object 1 ---------------------------------

theArray = [
  {
    id: 12323,
    Name: "Volvo",
    Year: 1949,
  },
  {
    id: 23562,
    Name: "Toyota",
    Year: 2010,
  },
  {
    id: 62345,
    Name: "Nissan",
    Year: 1990,
  },
];

initialValue = {};

const modifiedObj = theArray.reduce(
  (accumulator, currentValue) => ({
    ...accumulator,
    [currentValue.id]: currentValue,
  }),
  initialValue
);

console.log(modifiedObj);

// Array to modified object 2 ---------------------------------

theArray = ["Apple", "Mango", "Banana", "Pineaple"];
initialValue = {};

const arrToObj = theArray.reduce(
  (accumulator, currentValue) => ({
    ...accumulator,
    [theArray.indexOf(currentValue) + 1]: currentValue,
  }),
  initialValue
);

console.log(arrToObj);

