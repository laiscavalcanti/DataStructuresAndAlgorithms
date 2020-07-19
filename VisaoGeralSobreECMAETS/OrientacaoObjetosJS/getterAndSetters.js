class Person {
    constructor(name){
        this._name = name; //underscore statements create private attributes
    }
    set name (value){
        this._name = value;
    }
    get name (){
        return this._name;
    }
}
let namePerson = new Person("Lais");
console.log(namePerson.name)