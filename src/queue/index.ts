import {Queue} from "./queue";

const queue:Queue<string> = new Queue<string>();

const items:string[] = ["João", "Maria","Pedro","Lucas","Marlon","Ze da manga"];
items.forEach((e) => queue.enfileirar(e));
console.log(`items na fila: ${queue.toString()}`)
console.log(`o item ${queue.desenfileirar()} foi removido da fila`)
console.log(`items na fila: ${queue.toString()}`)
console.log(`o item : ${queue.enfileirar('Que dimais')} foi adicionado a fila`)
console.log(queue.toString());
