//It's possible to define default values for function parameters

function sum(x = 1, y = 2, z = 3){
    return x + y + z;
}
console.log(sum(4,2)) // 9, it happens because parameter 'z' was not passed: 4+2+3 = 9