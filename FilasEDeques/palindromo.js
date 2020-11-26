import Deque from "./deque.js"

function palindromeCheker(aString){
    if((aString === undefined) || (aString === null) || (aString !== null && aString.length === 0)){
        return false;
    }
    const deque = new Deque()
    const lowerString = aString.toLowerCase().split(' ').join('');
    let isEqual = true
    let firstChar, lastChar

    for(let i = 0; i < lowerString.length; i++ ){
        deque.addBack(lowerString.charAt(i))
    }
    while(deque.size() > 1 && isEqual){
        firstChar = deque.removeFront()
        lastChar = deque.peekBack()
        if(firstChar !== lastChar){
            isEqual = false;
        }
    }
    return isEqual
}
console.log('a', palindromeCheker('a'))
console.log('ana', palindromeCheker('ana'))
console.log('ana ama ana', palindromeCheker('ana ama ana'))
console.log('socorram me subi no onibus em marrocos', palindromeCheker('socorram me subi no onibus em marrocos'))