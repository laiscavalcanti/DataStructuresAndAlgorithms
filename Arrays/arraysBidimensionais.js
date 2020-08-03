let averageTemp = []; //in js doesn't exist an object matrix, but exists an arrays of arrays, to arrays unidimensionales
averageTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(myMatrix){
    for(let i = 0; i < myMatrix.length; i++){
        for (let j = 0; j < myMatrix[i].lenght; j++){
            console.log(myMatrix[i][j])
        }
    }
}

console.table(averageTemp) 