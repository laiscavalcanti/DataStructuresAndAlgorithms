const zero = 0; // concat method returns a new copy array with many arrays concatenated.

const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-0, -1, -2];

let numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers)