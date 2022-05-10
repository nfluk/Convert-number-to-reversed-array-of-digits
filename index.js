// Convert number to reversed array of digits
// Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.

// function digitize(n) {
//   const myArray = [];
//   let digits = n
//     .toString()
//     .split('')
//     .map((num) => parseInt(num));

//   for (let i = 0; i < digits.length; i++) {
//     myArray.unshift(digits[i]);
//   }

//   return myArray;
// }

// refactored:

function reversing(n) {
  return String(n).split('').map(Number).reverse();
}
