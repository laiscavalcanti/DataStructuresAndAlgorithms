import Queue from './queue.js';

function hotPotato(elementsList, num){
    const queue = new Queue();
    const elimitatedList = []

    for (let i = 0; i < elementsList.length; i++){
        queue.enqueue(elementsList[i])
    }

    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }
    return{
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}
const names = ['João', 'Maria', 'Pedro', 'Ana', 'José']
const result = hotPotato(names, 8)

result.eliminated.forEach(name =>{
    console.log(`${name} foi eliminado`)
})
console.log(`The winner is: ${result.winner}`)