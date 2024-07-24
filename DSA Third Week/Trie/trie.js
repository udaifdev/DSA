
class Node {
    constructor(val) {
        this.val = val;
        this.children = {};
        this.isEnd = false;
    }
}


class Trie {
    constructor() {
        this.root = new Node(null);
    }
    insert(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) curr.children[char] = new Node(char);
            curr = curr.children[char]
        }
        curr.isEnd = true;
    }

    search(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) return false;
            curr = curr.children[char];
        }
        return curr.isEnd
    }
    //check wors start with the prefix present
    startWith(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!curr.children[char]) return false
            curr = curr.children[char]
        }
        return true
    }

    //Find suggestions
    findSuggestions(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.children[char]) return [];
            current = current.children[char];
        }
        let suggestions = [];
        this.collectSuggestions(current, prefix, suggestions);
        return suggestions;
    }

    collectSuggestions(node, prefix, suggestions) {
        if (node.isEnd) suggestions.push(prefix);
        for (let child in node.children) {
            //console.log(node.children);
            this.collectSuggestions(node.children[child], prefix + child, suggestions);
        }
    }

}

const myTrie = new Trie();
myTrie.insert("Brototype");
myTrie.insert("Broto")
myTrie.insert("Helloworld");
myTrie.insert("Helloworkplace");
myTrie.insert("HelloUniverse");
myTrie.insert("How are you")
myTrie.insert("He went to home")
myTrie.insert(" Hi My name is Akhil")
console.log(myTrie.search("Broto"));
console.log(myTrie.startWith("Br"));
console.log(myTrie.startWith("md"));
console.log(myTrie.findSuggestions("Hello"));