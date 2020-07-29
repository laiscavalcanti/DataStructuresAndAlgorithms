let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.splice(5, 3); //method splice changes the contents of a list by adding elements while removing old ones

console.log(numbers)

numbers.splice(5, 0, 5, 6, 7);
console.log(numbers)