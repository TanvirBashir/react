function theCallback(some) {
  console.log('This is callback')
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, theCallback);