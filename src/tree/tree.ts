import {TreeNode} from "./tree-node";

export class BinaryTree<T> {
    root: TreeNode<T> | null = null;

    /**
     * Insere um novo valor na árvore.
     * @param value - O valor a ser inserido na árvore.
     */
    insert(value: T): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    /**
     * Método auxiliar para inserir um novo nó na árvore.
     * @param node - Nó atual na árvore.
     * @param newNode - Novo nó a ser inserido.
     */
    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    /**
     * Busca um valor na árvore.
     * @param value - O valor a ser buscado na árvore.
     * @returns Retorna verdadeiro se o valor for encontrado, falso caso contrário.
     */
    search(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    /**
     * Método auxiliar para buscar um valor na árvore.
     * @param node - Nó atual na árvore.
     * @param value - Valor a ser buscado.
     * @returns Retorna verdadeiro se o valor for encontrado, falso caso contrário.
     */
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
     * Percorre a árvore em ordem (In-Order).
     * Visita primeiro a subárvore esquerda, depois o nó atual, e finalmente a subárvore direita.
     */
    inOrderTraversal(): void {
        this.inOrder(this.root);
    }

    /**
     * Método auxiliar para percurso em ordem.
     * @param node - Nó atual na árvore.
     */
    private inOrder(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    /**
     * Percorre a árvore em pré-ordem (Pre-Order).
     * Visita o nó atual antes das subárvores esquerda e direita.
     */
    preOrderTraversal(): void {
        this.preOrder(this.root);
    }

    /**
     * Método auxiliar para percurso em pré-ordem.
     * @param node - Nó atual na árvore.
     */
    private preOrder(node: TreeNode<T> | null): void {
        if (node !== null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    /**
     * Percorre a árvore em pós-ordem (Post-Order).
     * Visita as subárvores esquerda e direita antes do nó atual.
     */
    postOrderTraversal(): void {
        this.postOrder(this.root);
    }

    /**
     * Método auxiliar para percurso em pós-ordem.
     * @param node - Nó atual na árvore.
     */
    private postOrder(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }
}
