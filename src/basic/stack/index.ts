import {Stack} from "./stack";

const stack:Stack<string> = new Stack<string>();

const items:string[] = ['rota 1','rota 2', 'rota 3', 'rota 4', 'rota 5', 'rota 6', 'rota 7', 'rota 8'];

items.forEach(e => stack.push(e))
console.log('Numa pilha o primeiro item a entrar é o ultimo a sair')
console.log(`stack atual: ${stack.toString()}`);
console.log(`o proximo item da pilha é ${stack.peek()}`);
console.log(`o proximo item da pilha foi removido e seu valor é ${stack.pop()}`)
console.log(`o proximo item da pilha é : ${stack.pop()}`);