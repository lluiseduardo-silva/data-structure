import {TrieNode} from "./trie-node";

export class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Insere uma string na trie.
     * @param word - A string a ser inserida.
     */
    insert(word: string): void {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        current.isEndOfWord = true;
    }

    /**
     * Verifica se uma string está na trie.
     * @param word - A string a ser pesquisada.
     * @returns Verdadeiro se a string estiver na trie, falso caso contrário.
     */
    search(word: string): boolean {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        return current.isEndOfWord;
    }

    /**
     * Verifica se uma string é um prefixo de qualquer string na trie.
     * @param prefix - O prefixo a ser pesquisado.
     * @returns Verdadeiro se o prefixo for encontrado, falso caso contrário.
     */
    startsWith(prefix: string): boolean {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        return true;
    }
}
