import DoublyNode from "./DoublyNode"
import LinkedLit from "./LinkedLit"


export default class DoublyLinkedList extends LinkedLit{
    constructor(equalsfn = defaultEquals){
        super(equalsfn)
        this.tail = undefined
    }
    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new DoublyNode(element)
            let current = this.head
            if(index === 0){
                if(thiss.head == null){
                    this.head = node
                    this.tail = node
                } else{
                    node.next = this.head
                    current.prev = node
                    this.head =  node
                }
            }else if (index === this.count){
                current = this.tail
                current.next = node
                node.prev =  current
                this.tail = node
            } else{
                const previous = this.getElement(index - 1)
                current = previous.next
                node.next = current
                previous.next =  node
                current.prev = node
                node.prev =  previous
            }
            this.count ++
            return true
        }
        return true
    }
    
}

