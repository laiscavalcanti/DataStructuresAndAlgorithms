let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let numbers2 = Array.from(numbers);// the from method returns a new copy the original array

console.log(numbers2);

let evens = Array.from(numbers, x => (x % 2 == 0));

console.log(evens);