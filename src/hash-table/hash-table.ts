export class HashTable<K, V> {
    private readonly table: { [key: string]: V };
    private readonly size: number;

    constructor(size: number = 100) {
        this.table = {};
        this.size = size;
    }

    /**
     * Função hash para calcular o índice da chave.
     * @param key - A chave para a qual o índice será calculado.
     * @returns Retorna um índice calculado com base na chave.
     */
    private hash(key: K): number {
        let hash = 0;
        const keyString = JSON.stringify(key);
        for (let i = 0; i < keyString.length; i++) {
            hash += keyString.charCodeAt(i);
        }
        return hash % this.size;
    }

    /**
     * Insere um par chave-valor na tabela hash.
     * @param key - A chave a ser inserida.
     * @param value - O valor a ser inserido.
     */
    set(key: K, value: V): void {
        const index = this.hash(key);
        this.table[index] = value;
    }

    /**
     * Busca um valor usando uma chave.
     * @param key - A chave do valor a ser buscado.
     * @returns Retorna o valor associado à chave, ou undefined se a chave não for encontrada.
     */
    get(key: K): V | undefined {
        const index = this.hash(key);
        return this.table[index];
    }

    /**
     * Remove um par chave-valor da tabela hash.
     * @param key - A chave do par a ser removido.
     */
    remove(key: K): void {
        const index = this.hash(key);
        delete this.table[index];
    }

    /**
     * Exibe todo o conteúdo da tabela hash.
     */
    display(): void {
        for (const key in this.table) {
            if (this.table.hasOwnProperty(key)) {
                console.log(`Key: ${key} - Value: ${this.table[key]}`);
            }
        }
    }
}
