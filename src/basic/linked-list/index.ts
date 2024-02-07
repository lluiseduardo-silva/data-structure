import {LinkedList} from "./linked-list";

const list = new LinkedList<number>();

// Inserindo elementos
list.insertAtBeginning(3);
list.insertAtBeginning(2);
list.insertAtBeginning(1);

// Exibindo a lista
list.display(); // Saída: 1 2 3

// Buscando um elemento
let node = list.find(2);
console.log(node ? `Elemento encontrado: ${node.value}` : "Elemento não encontrado");

// Removendo um elemento
list.remove(2);
list.display(); // Saída: 1 3

node = list.find(2);
console.log(node ? `Elemento encontrado: ${node.value}` : "Elemento não encontrado");