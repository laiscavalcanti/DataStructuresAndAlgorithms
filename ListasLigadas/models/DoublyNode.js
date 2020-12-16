import Node from "./linked-list-models"

export default class DoublyNode extends Node{
    constructor(element, next, prev){
        super(element, next)
        this.prev = prev
    }


}

