let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


console.log(numbers.indexOf(10));// returns the index of element, in this case, 9
console.log(numbers.indexOf(100));// returns -1 because, this number doesn't exists in array numbers

numbers.push(10);

console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));