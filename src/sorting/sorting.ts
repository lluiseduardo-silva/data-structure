/**
 * Ordena um array usando o algoritmo Bubble Sort.
 * @param {T[]} arr - O array a ser ordenado.
 * @returns {T[]} - O array ordenado.
 * @example
 * const sortedArray = bubbleSort([3, 2, 1]);
 * // sortedArray agora é [1, 2, 3]
 */
export function bubbleSort<T>(arr: T[]): T[] {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

/**
 * Ordena um array usando o algoritmo Selection Sort.
 * @param {T[]} arr - O array a ser ordenado.
 * @returns {T[]} - O array ordenado.
 * @example
 * const sortedArray = selectionSort([3, 2, 1]);
 * // sortedArray agora é [1, 2, 3]
 */
export function selectionSort<T>(arr: T[]): T[] {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;

        // Encontra o índice do menor elemento restante no array
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Troca o menor elemento encontrado com o elemento na posição i
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

/**
 * Ordena um array usando o algoritmo Insertion Sort.
 * @param {T[]} arr - O array a ser ordenado.
 * @returns {T[]} - O array ordenado.
 * @example
 * const sortedArray = insertionSort([3, 2, 1]);
 * // sortedArray agora é [1, 2, 3]
 */
export function insertionSort<T>(arr: T[]): T[] {
    const length = arr.length;

    for (let i = 1; i < length; i++) {
        const key = arr[i];
        let j = i - 1;

        // Move os elementos do array que são maiores que a chave para uma posição à frente de sua posição atual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insere a chave na posição correta
        arr[j + 1] = key;
    }

    return arr;
}

/**
 * Ordena um array usando o algoritmo Merge Sort.
 * @param {T[]} arr - O array a ser ordenado.
 * @returns {T[]} - O array ordenado.
 * @example
 * const sortedArray = mergeSort([3, 2, 1]);
 * // sortedArray agora é [1, 2, 3]
 */
export function mergeSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    // Divide o array ao meio
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // Recursivamente ordena as duas metades
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Combina e ordena as duas metades
    return merge(sortedLeft, sortedRight);
}

/**
 * Combina dois arrays ordenados em um único array ordenado.
 * @param {T[]} left - O array da esquerda.
 * @param {T[]} right - O array da direita.
 * @returns {T[]} - O array combinado e ordenado.
 */
function merge<T>(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Combina os elementos em ordem
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Adiciona os elementos restantes, se houver, de ambas as metades
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * Ordena um array usando o algoritmo Quick Sort.
 * @param {T[]} arr - O array a ser ordenado.
 * @returns {T[]} - O array ordenado.
 * @example
 * const sortedArray = quickSort([3, 2, 1]);
 * // sortedArray agora é [1, 2, 3]
 */
export function quickSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    // Particiona o array em torno do pivô
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    // Retorna a concatenação recursiva dos arrays ordenados
    return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * Ordena um array de números usando o algoritmo Heap Sort.
 * @param {number[]} arr - O array a ser ordenado.
 * @returns {number[]} - O array ordenado.
 * @example
 * const sortedArray = heapSort([3, 2, 1]);
 * // sortedArray agora é [1, 2, 3]
 */
export function heapSort(arr: T[]): T[] {
    // Transforma o array em um heap máximo
    buildMaxHeap(arr);

    // Extrai os elementos um por um do heap
    for (let i = arr.length - 1; i > 0; i--) {
        // Troca o primeiro elemento (o maior) com o último não ordenado
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Reconstroi o heap máximo no array sem o último elemento ordenado
        heapify(arr, 0, i);
    }

    return arr;
}

/**
 * Transforma um array em um heap máximo.
 * @param {T[]} arr - O array a ser transformado em heap máximo.
 */
function buildMaxHeap<T>(arr: T[]): void {
    const length = arr.length;
    // Inicia da metade do array (os elementos não-folha)
    for (let i = Math.floor(length / 2); i >= 0; i--) {
        heapify(arr, i, length);
    }
}

/**
 * Reconstroi um heap máximo a partir de um índice específico.
 * @param {T[]} arr - O array contendo o heap.
 * @param {number} index - O índice do elemento que deve ser heapificado.
 * @param {number} heapSize - O tamanho do heap.
 */
function heapify<T>(arr: T[], index: number, heapSize: number): void {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    // Verifica se o filho esquerdo é maior que o pai
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    // Verifica se o filho direito é maior que o pai e o filho esquerdo
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    // Se o maior não é o próprio pai, troca com o maior e reconstroi o heap
    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, largest, heapSize);
    }
}
