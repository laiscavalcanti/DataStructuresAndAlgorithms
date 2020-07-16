const circleAreaES5 = function circleArea(r){ // this way is a classic way of declaring functions
    let PI = 3.14; //but it is more verbose
    let area = PI  * r * r;
    return area;
}
console.log(circleAreaES5(2))

const circleArea = r =>{ // this way is the new way os declaring function in ECM16, arrow functions
    const PI = 3.14;
    const area = PI * r * r;
    return area
}

console.log(circleArea(3))