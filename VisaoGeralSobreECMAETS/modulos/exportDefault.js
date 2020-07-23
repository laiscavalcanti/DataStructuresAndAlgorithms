export default class Book{ //exporting a single class uses 'default'
    constructor(title){
        this.title = title;
    }
    printTitle(){
        console.log(this.title);
    }
}