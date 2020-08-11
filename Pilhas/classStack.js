class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element); //this method adds an element to the end of the queue
    }
    pop(){
        return this.items.pop(); // this method removes an element to the end of queue
    }
    peek(){
        return this.items[this.items.legnt - 1]; // this method checks the element at the top of the list
    }
    isEmpty(){
        return this.items.length === 0; // this method checks if o array is empty
    }
    size(){
        return this.items.length;// this method checks the size of array
    }
    clear(){
        this.items =[];// this method cleans the array
    }
}