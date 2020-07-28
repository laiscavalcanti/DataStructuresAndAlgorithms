/*let daysOfWeek = new Array(); //The JavaScript array object is an global object used in building arrays.
daysOfWeek = new Array(7);

daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

for(let i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i])
}*/
////////////////////////////////////////

const fibionacci = [];
fibionacci[1] = 1;
fibionacci[2] = 2;

for(let i = 3; i < 20; i++){
    fibionacci[i] = fibionacci[i - 1] - fibionacci[i - 2];
}

for(let i = 1; i < fibionacci.length; i++){
    console.log(fibionacci)
}