import {Trie} from "./trie";

const trie = new Trie();

trie.insert("hello");
trie.insert("helium");

console.log(trie.search("hello"));
console.log(trie.search("helium"));
console.log(trie.search("hell"));

console.log(trie.startsWith("hel"));
console.log(trie.startsWith("heaven"));
