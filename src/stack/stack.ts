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
     * Acrescenta um novo elemento á pilha
     * @param {T} value
     */
    acrescentar(value:T){
        this.data.push(value);
    }

    /**
     * Retorna o primeiro elemento da pilha
     * @returns T | undefined
     */
    obterProximo(): T|undefined  {
        if(this.estaVazia()){
            return;
        }
        return this.data[this.data.length - 1];
    }

    /**
     * Retorna verdadeiro se a pilha estiver vazia
     * @returns boolean
     */
     estaVazia(): boolean {
         return this.data.length == 0;
    }

    /**
     * Remove o ultimo elemento da pilha e retorna ele
     * @returns T | undefined
     */
    removerUltimoeRetornarEle(): T | undefined{
        if(this.estaVazia()){
            return ;
        }
        return this.data.pop();
    }

    /**
     * retorna uma representação em string da pilha
     * @param [callback]
     */
    toString(callback?: (value: T) => string){
        return this.toArray().map(i => callback ? callback(i): `${i}`).join(',');
    }

    /**
     * Retorna um array que representa a pilha
     * @returns T[]
     */
    toArray(): T[] {
        return[...this.data].reverse();
    }
}