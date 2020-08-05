let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let aentries = numbers.entries();
/*console.log(aentries.next().value);
console.log(aentries.next().value);
console.log(aentries.next().value);*/

aentries = numbers.entries();
for(const n of aentries){
    console.log(n);

}//the entries method returns @@iterator which has a pair key/value