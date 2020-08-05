let numbers4 = Array.of(1, 2, 3, 4, 5, 6);

let numbersCopy = Array.of(...numbers4);

console.log(numbersCopy.fill(1, 3, 5));

let ones = Array(6).fill(2);
console.log(ones); // the fill method fills the array with a value.