function sum (x = 1, y = 2, z = 3){
    return x + y + z;
}
let params = [3, 4, 5];
console.log(sum(...params))