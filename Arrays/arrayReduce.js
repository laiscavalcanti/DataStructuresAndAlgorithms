let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.reduce((previus, current) => previus + current));

//the reduce method executes a function reducer (given by developer) for each element of array
//and can receives four parameters: accumulator, current, index and original 