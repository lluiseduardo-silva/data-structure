### Conteúdo abordado
- [x] Arrays
- [x] Linked Lists
- [x] Stacks
- [x] Queues
- [x] Trees
- [x] Hash Tables
- [x] Graphs
- [x] Heaps
- [x] Tries
- [x] Sets
- [x] Sorting:
- -[x] Bubble Sort
- - [x] Selection Sort
- - [x] Insertion Sort
- - [x] Merge Sort
- - [x] Quick Sort
- - [x] Heap Sort
#### Arrays:
Arrays (ou vetores) são coleções de elementos do mesmo tipo, armazenados em posições contíguas na memória.
Permitem acesso rápido a um elemento em qualquer posição, usando um índice.

#### Linked Lists:
São sequências de elementos, onde cada elemento está conectado ao próximo por um "link" ou referência.
Existem várias variações, como singly linked lists, doubly linked lists e circular linked lists.

#### Stacks:
Estrutura de dados do tipo LIFO (Last In, First Out), onde o último elemento adicionado é o primeiro a ser removido.
Comumente usada para gerenciamento de memória, execução de algoritmos recursivos, entre outros.

#### Queues:
Estrutura do tipo FIFO (First In, First Out), onde o primeiro elemento adicionado é o primeiro a ser removido.
Útil em situações que exigem um processamento sequencial, como impressão de documentos, gerenciamento de tarefas, etc.

#### Trees:
Estrutura hierárquica não linear, com um elemento raiz e subárvores de filhos com um pai.
Variações incluem binary trees, AVL trees, red-black trees, entre outras.

#### Hash Tables:
Estrutura que mapeia chaves para valores, oferecendo inserções, buscas e remoções eficientes.
Utiliza uma função hash para calcular um índice no qual o valor será armazenado.

#### Graphs:
Consistem de vértices (ou nós) e arestas que conectam esses vértices.
Podem ser direcionados ou não direcionados, e podem incluir informações como peso nas arestas.

- Significado do Peso: O peso de uma aresta em um grafo pode representar diversas coisas, como:
- Distância: Em grafos que representam redes de estradas, o peso pode indicar a distância entre dois pontos.
- Custo: Em redes de transporte ou logística, o peso pode representar o custo de viajar entre dois pontos.
- Capacidade: Em grafos que modelam redes de comunicação ou fluxo, o peso pode indicar a capacidade ou largura de banda de uma conexão.
- Tempo: Em grafos de planejamento ou roteamento, o peso pode ser o tempo necessário para percorrer entre dois vértices.

Grafos Ponderados: Quando um grafo tem pesos atribuídos às suas arestas, ele é chamado de "grafo ponderado". Esses pesos são normalmente representados por números e podem ser usados em algoritmos para calcular o caminho mais curto, o caminho de menor custo, ou outras medidas que dependam do peso das arestas.

Aplicação em Algoritmos: Vários algoritmos de grafos, como Dijkstra ou Prim, usam os pesos das arestas para encontrar soluções para problemas como o caminho mais curto ou a árvore geradora mínima, respectivamente. Em tais algoritmos, a maneira como os pesos são considerados é crucial para determinar a solução correta.

Representação: Em termos de representação, um grafo ponderado pode ser expresso como uma lista de adjacências onde cada aresta está associada a um peso, ou como uma matriz de adjacências onde as entradas na matriz representam os pesos das arestas.

Grafos Não Ponderados vs. Ponderados: Em um grafo não ponderado, as arestas não têm valores de peso associados a elas. Nestes casos, pode-se assumir que todas as arestas têm o mesmo "peso" ou custo, frequentemente considerado como 1 para simplificação.

#### Heaps:
Uma forma especial de árvore binária (geralmente uma árvore binária completa).
Max-heaps e min-heaps são comuns, onde a chave na raiz é respectivamente o máximo ou mínimo entre todas as chaves presentes na heap.

#### Tries:
Uma árvore de pesquisa especializada que é usada para armazenar um conjunto dinâmico ou um array associativo onde as chaves são geralmente strings.
Útil para implementar dicionários com pesquisa rápida.

#### Sets:
Coleção de elementos que não permite duplicatas.
Pode ser implementado de várias maneiras, incluindo como uma tabela hash ou uma árvore.

#### Sorting:
- **Bubble Sort**: Possui uma complexidade de tempo média de *O ( n ^ 2 )*. É eficiente para pequenos conjuntos de dados, mas torna-se muito lento à medida que o número de elementos aumenta.
- **Selection Sort**: Tem uma complexidade de tempo média de *O ( n ^ 2 )*. Também é menos eficiente para grandes conjuntos de dados, mas geralmente é mais rápido que o Bubble Sort em média.
- **Insertion Sort**: Tem uma complexidade de tempo média de *O ( n ^ 2 )*, mas é mais eficiente que o Bubble Sort e o Selection Sort em muitos casos, especialmente para conjuntos de dados parcialmente ordenados ou pequenos.
- **Merge Sort**: Tem uma complexidade de tempo média de *O ( n ^ n )*. É mais eficiente que os algoritmos anteriores para conjuntos de dados grandes e é um algoritmo de classificação estável.
- **Quick Sort**: Tem uma complexidade de tempo média de *O ( n ^ n )*, mas pode degradar para O(n^2) no pior caso. No entanto, é frequentemente mais rápido que o Merge Sort na prática devido a constantes menores e menor uso de memória.
- **Heap Sort**: Tem uma complexidade de tempo média de *O ( n ^ n )*. É eficiente e tem um desempenho constante em todos os casos, mas geralmente é menos rápido que o Quick Sort