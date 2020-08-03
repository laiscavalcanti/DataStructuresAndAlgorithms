const matrix3x3x3 = []; //it's possible to work with arrays multidimensional creating, for example, a array 3 x 3

for (let i = 0; i < 3; i++){
    matrix3x3x3[i] = [];
    for(let j = 0; j < 3; j++){
        matrix3x3x3[i][j] = [];
        for(let z = 0; z < 3; z++);{
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

    for(let i = 0; i < matrix3x3x3.length; i++){
        for (let j = 0; j < matrix3x3x3.lenght; j++){
            for(let z = 0; z < matrix3x3x3.lenght; z++){
            console.log(matrix3x3x3[i][j][z])
            }
        }
    }

console.table(matrix3x3x3)
