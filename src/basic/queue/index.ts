import {Queue} from "./queue";

const queue:Queue<string> = new Queue<string>();

const items:string[] = ["João", "Maria","Pedro","Lucas","Marlon","Ze da manga"];
items.forEach((e) => queue.enqueue(e));
console.log('Numa fila o primeiro item a entrar é o primeiro item a sair.')
console.log(`items na fila: ${queue.toString()}`)
console.log(`o item ${queue.dequeue()} foi removido da fila`)
console.log(`items na fila: ${queue.toString()}`)
console.log(`o item : ${queue.enqueue('Que dimais')} foi adicionado a fila`)
console.log(queue.toString());
