interface Person{ //interface in TS is a description of attributes and methods that an object should have
    name: string;
    age: number;
}

function printName(person: Person){
    console.log(person.name)
}