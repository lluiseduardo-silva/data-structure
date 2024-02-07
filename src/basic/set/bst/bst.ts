import {TreeNode} from "./tree-node";

export class BinarySearchTreeSet<T> {
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    /**
     * Insere um valor no conjunto.
     * @param value - Valor a ser inserido.
     */
    insert(value: T): void {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
        // Se newNode.value == node.value, não faz nada (conjuntos não têm duplicatas)
    }

    /**
     * Verifica se um valor está presente no conjunto.
     * @param value - Valor a ser buscado.
     * @returns Verdadeiro se encontrado, falso caso contrário.
     */
    contains(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode<T> | null, value: T): boolean {
        if (node === null) {
            return false;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true; // Valor encontrado
        }
    }
    /**
     * Exibe todos os elementos da árvore em ordem.
     */
    display(): void {
        this.inOrderTraversal(this.root);
    }

    private inOrderTraversal(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}
