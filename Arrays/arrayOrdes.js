const friends = [{
    name: 'Joao',
    age: 25
},
{
    name: 'Maria',
    age: 30
},
{
    name: 'Ana',
    age: 20
},
{
    name: 'Pedro',
    age: 40
}
   
];

function comparePerson(a, b){
    if(a.age < b.age){
        return -1;
    }
    if(a.ge > b.age){
        return 1;
    }
    return 0;

}

console.log(friends.sort(comparePerson)); //In this code we analyze the order of the array

let names = ['Ana', 'João', 'ana', 'joão'];

//console.log(names.sort());

const names2 = names.sort((a, b) =>{
    if(a.toLocaleLowerCase < b.toLocaleLowerCase){
        return -1;
    }
    if(a.toLocaleLowerCase > b.toLocaleLowerCase){
        return 1;
    }
    return 0;
});
console.log(names2);

const namesOrdemAlfabetica = names.sort((a, b) => a.localeCompare(b));
console.log(namesOrdemAlfabetica)
