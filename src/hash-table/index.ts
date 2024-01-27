import {HashTable} from "./hash-table";

const hashTable = new HashTable<string, number>();

hashTable.set("chave1", 10);
hashTable.set("chave2", 20);

hashTable.display();

console.log(hashTable.get("chave1"));
console.log(hashTable.get("chave2"));

hashTable.remove("chave1");
console.log(hashTable.get("chave1"));
