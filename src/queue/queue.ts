/**
 * @export
 * @class Queue
 */

export class Queue<T> {
    fila: T[];

    /**
     * Cria uma instancia de Queue
     * @memberof Queue
     */
    constructor() {
        this.fila= [];
    }

    /**
     * Insere um novo item no final da fila
     * @param {*} item
     * @return {Queue}
     * @memberof Queue
     */
    enfileirar(item: T):T {
        this.fila=[...this.fila,item];
        return item;
    }

    /**
     * Remove o ultimo item da fila e retorna ele
     * @return {Queue}
     * @memberof Queue
     */
    desenfileirar(): T {
        const item = this.fila[0];
        this.fila = this.fila.slice(1);
        return item;
    }

    /**
     * Verifica se a lista está vazia
     * @return {boolean}
     * @memberof Queue
     */
    estaVazia(): boolean {
        return this.fila.length == 0;
    }

    /**
     * retorna o tamanho da fila atual
     * @return {number}
     * @memberof Queue
     */
    obterTamanho():number {
        return this.fila.length;
    }

    /**
     * Converte a fila atual para string e retorna a mesma
     * @return {string}
     * @memberof Queue
     */
    toString(): string {
        return this.fila.toString();
    }
}