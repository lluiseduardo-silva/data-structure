import {BinaryTree} from "./tree";

const tree = new BinaryTree<number>();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.insert(5);

console.log("In-Order Traversal:");
tree.inOrderTraversal();

console.log("Pre-Order Traversal:");
tree.preOrderTraversal();

console.log("Post-Order Traversal:");
tree.postOrderTraversal();

console.log("Search 7:", tree.search(7));
console.log("Search 10:", tree.search(10));