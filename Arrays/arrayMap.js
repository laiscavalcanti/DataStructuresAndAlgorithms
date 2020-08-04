import isEven from './arrayIteracao.js';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const myMap = numbers.map(isEven)

console.log(myMap) // map method to create a new array from function with condition and returns 
                // the elements that match the condition