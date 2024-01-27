export class Graph<T> {
    private adjacencyList: Map<T, T[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    /**
     * Adiciona um novo vértice ao grafo.
     * @param vertex - O vértice a ser adicionado.
     */
    addVertex(vertex: T): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    /**
     * Adiciona uma aresta entre dois vértices no grafo.
     * @param vertex1 - O primeiro vértice da aresta.
     * @param vertex2 - O segundo vértice da aresta.
     */
    addEdge(vertex1: T, vertex2: T): void {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1)?.push(vertex2);
            this.adjacencyList.get(vertex2)?.push(vertex1);
        }
    }

    /**
     * Exibe o conteúdo do grafo.
     */
    display(): void {
        for (const [vertex, edges] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        }
    }
}
