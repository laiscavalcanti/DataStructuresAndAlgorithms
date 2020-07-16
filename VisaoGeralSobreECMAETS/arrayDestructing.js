//array destructing this way to boot variables at once

let [x, y] = ['a', 'b']; //1 before

let = 'a'; //2 after
let = 'b';

//1 and 2 are the same results

// array destructing can be used to swap values at once

[x, y] == [y, x]//1 after

var temp = x; //2 before
x = y;
y = temp;