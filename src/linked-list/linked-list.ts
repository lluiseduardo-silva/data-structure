import {ListNode} from "./list-node";

export class LinkedList<T> {
    head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    /**
     * Insere um novo elemento no início da lista.
     * @param value - O valor a ser inserido.
     */
    insertAtBeginning(value: T): void {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * Busca um elemento na lista.
     * @param value - O valor a ser buscado.
     * @returns O nó encontrado, ou null se não encontrado.
     */
    find(value: T): ListNode<T> | null {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    /**
     * Remove um elemento da lista.
     * @param value - O valor a ser removido.
     * @returns Verdadeiro se o elemento foi removido, falso se não foi encontrado.
     */
    remove(value: T): boolean {
        if (!this.head) {
            return false;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    /**
     * Exibe todos os elementos da lista.
     */
    display(): void {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}