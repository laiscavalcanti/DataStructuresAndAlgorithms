let movie = 'Her' //scope global

function movies(){
    const movie = 'Lost in Translation' //scope local
    return movie
}

console.log(movie)
console.log(movies())