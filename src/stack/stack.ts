/**
 * @export
 * @class Stack
 */
export class Stack<T> {
    data: T[];
    constructor() {
        this.data = [];
    }

    /**
     * Pushes a new element onto the stack
     * @param { T } value
     */
    push(value:T){
        this.data.push(value);
    }

    /**
     * Returns the top element of the stack
     * @returns T | undefined
     */
    peek(): T|undefined  {
        if(this.isEmpty()){
            return;
        }
        return this.data[this.data.length - 1];
    }

    /**
     * Returns true if the stack is empty
     * @returns boolean
     */
    isEmpty(): boolean {
        return this.data.length == 0;
    }

    /**
     * Removes and returns the top element of the stack
     * @returns T | undefined
     */
    pop(): T | undefined{
        if(this.isEmpty()){
            return ;
        }
        return this.data.pop();
    }

    /**
     * Returns a string representation of the stack
     * @param [callback]
     */
    toString(callback?: (value: T) => string){
        return this.data.map(i => callback ? callback(i): `${i}`).join(',');
    }
}