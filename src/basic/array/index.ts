// Criando um array
const numbers: number[] = [1, 2, 3, 4, 5];

// Acessando elementos do array
console.log(numbers[0]); // Saída: 1
console.log(numbers[2]); // Saída: 3

// Iterando sobre um array com 'for' loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Iterando com 'forEach'
numbers.forEach((number) => {
    console.log(number);
});

// Adicionando elementos ao array
numbers.push(6); // Adiciona ao final
console.log(numbers); // Saída: [1, 2, 3, 4, 5, 6]

// Removendo elementos do array
numbers.pop(); // Remove o último elemento
console.log(numbers); // Saída: [1, 2, 3, 4, 5]

// Removendo o primeiro elemento
numbers.shift();
console.log(numbers); // Saída: [2, 3, 4, 5]

// Inserindo no início do array
numbers.unshift(1);
console.log(numbers); // Saída: [1, 2, 3, 4, 5]

// Encontrando um elemento no array
const index = numbers.indexOf(3);
console.log(`O índice do número 3 é: ${index}`);

// Filtrando elementos
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Números pares: ${evenNumbers}`);

// Mapeando elementos para uma nova forma
const doubled = numbers.map(num => num * 2);
console.log(`Números dobrados: ${doubled}`);


// Criando um array bidimensional
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Acessando elementos em um array bidimensional
console.log(matrix[0][0]); // Saída: 1 (primeira linha, primeira coluna)
console.log(matrix[1][1]); // Saída: 5 (segunda linha, segunda coluna)

// Iterando sobre um array bidimensional com loops aninhados
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Elemento na posição [${i}][${j}]: ${matrix[i][j]}`);
    }
}

// Alterando um elemento
matrix[1][1] = 10;
console.log(`Novo valor na posição [1][1]: ${matrix[1][1]}`);

// Criando um array tridimensional
const threeDArray: number[][][] = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]],
    [[9, 10], [11, 12]]
];

threeDArray[0][0][1]=20;

// Acessando elementos em um array tridimensional
console.log(threeDArray[0][0][1]); // Saída: 4 (primeira matriz, primeira linha, segunda coluna)

// Iterando sobre um array tridimensional com loops aninhados
for (let i = 0; i < threeDArray.length; i++) { // Itera sobre a primeira dimensão
    console.log(`Matriz ${i}:`);
    for (let j = 0; j < threeDArray[i].length; j++) { // Itera sobre a segunda dimensão
        let rowStr = `Linha ${j}: `;
        for (let k = 0; k < threeDArray[i][j].length; k++) { // Itera sobre a terceira dimensão
            rowStr += `${threeDArray[i][j][k]} `;
        }
        console.log(rowStr);
    }
}
