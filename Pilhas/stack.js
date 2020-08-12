class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }

    push(element){
        this.items[this.count] = element;
        this.count ++;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.count === 0;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count --;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return 
        }
        return this.items[this.count - 1];
    }
    clear(){
        this.items = {};
        this.count = 0;
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++){
        objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(8);


console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());

console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);

function decimalToBinario(decNumber){
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';

    while(number > 0){
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while(!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    } 
    return binaryString;
}

console.log(decimalToBinario(233));
console.log(decimalToBinario(10));
console.log(decimalToBinario(1000));