export class Queue<T> {
    private queue: T[];

    constructor() {
        this.queue = [];
    }

    /**
     * @param item The item to be added to the queue.
     */
    enqueue(item: T): T {
        this.queue.push(item);
        return item;
    }

    /**
     * @returns The item at the front of the queue.
     * @throws Error if the queue is empty.
     */
    dequeue(): T | undefined{
        if (this.queue.length === 0) {
            throw new Error("Queue is empty");
        }
        return this.queue.shift();
    }

    /**
     * @returns The item at the front of the queue.
     * @throws Error if the queue is empty.
     */
    peek(): T {
        if (this.queue.length === 0) {
            throw new Error("Queue is empty");
        }
        return this.queue[0];
    }

    /**
     * Checks if the queue is empty.
     * @returns True if the queue is empty, false otherwise.
     */
    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    /**
     * @returns The number of items in the queue.
     */
    getSize(): number {
        return this.queue.length;
    }

    /**
     * @returns A string representation of the queue.
     */
    toString(): string {
        return this.queue.join(',');
    }
}