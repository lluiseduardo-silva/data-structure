import {MaxHeap, MinHeap} from "./heap";

const maxHeap = new MaxHeap();

maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(2);
maxHeap.insert(15);

maxHeap.display();

console.log(maxHeap.extractMax());

maxHeap.display();

const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(15);


minHeap.display();

console.log(minHeap.extractMin());

minHeap.display();
