// Criando um novo Set
import {BinarySearchTreeSet} from "./bst/bst";

const numbersSet = new Set<number>();

numbersSet.add(1);
numbersSet.add(2);
numbersSet.add(3);
numbersSet.add(4);
numbersSet.add(2);

if (numbersSet.has(3)) {
    console.log("3 está no Set");
} else {
    console.log("3 não está no Set");
}

numbersSet.delete(2);

console.log(`O tamanho do Set é: ${numbersSet.size}`);

numbersSet.forEach(value => {
    console.log(value);
});

const numbersArray = Array.from(numbersSet);
console.log("Array:", numbersArray);


const bstSet = new BinarySearchTreeSet<number>();

// Inserindo valores
bstSet.insert(3);
bstSet.insert(1);
bstSet.insert(4);
bstSet.insert(2);
bstSet.display();
console.log('depois')
bstSet.insert(3); // Tentando inserir um valor duplicado
bstSet.display();
// Verificando a existência de valores
console.log(bstSet.contains(3)); // Saída: true
console.log(bstSet.contains(5)); // Saída: false
