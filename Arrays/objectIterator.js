let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let interator = numbers[Symbol.iterator]();
console.log(iterator.next().value);

//the loop for..of is a mix of the foreach and for methods