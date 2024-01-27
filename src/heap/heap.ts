export class MaxHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    /**
     * Insere um novo elemento no heap.
     * @param value - O valor a ser inserido.
     */
    insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    /**
     * Reorganiza o heap após a inserção para manter as propriedades do max heap.
     */
    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] < this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Remove e retorna o maior elemento do heap.
     * @returns O maior elemento do heap.
     */
    extractMax(): number | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return max;
    }

    /**
     * Reorganiza o heap após a remoção para manter as propriedades do max heap.
     */
    private heapifyDown(): void {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            if (largestIndex !== index) {
                [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
                index = largestIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Exibe o heap.
     */
    display(): void {
        console.log(this.heap);
    }
}
export class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    /**
     * Insere um novo elemento no heap.
     * @param value - O valor a ser inserido.
     */
    insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    /**
     * Reorganiza o heap após a inserção para manter as propriedades do min heap.
     */
    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Remove e retorna o menor elemento do heap.
     * @returns O menor elemento do heap.
     */
    extractMin(): number | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return min;
    }

    /**
     * Reorganiza o heap após a remoção para manter as propriedades do min heap.
     */
    private heapifyDown(): void {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex !== index) {
                [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
                index = smallestIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Exibe o heap.
     */
    display(): void {
        console.log(this.heap);
    }
}
