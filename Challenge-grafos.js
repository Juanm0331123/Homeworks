/**
 * Create and handle new graph of friends and cities.
 * ✓ Every person should be a node, and every city too.
 * ✓ Every person must have name and Age, and should be referenced to one city
 * ✓ Every city must have a name.
 * ✓ Print the list of people who lives in a particular City
 * 
 */

class Node {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
}

class Graph {
    constructor() {
        this.nodes = {};
        this.edges = {};
    }

    addNode(node) {
        this.nodes[node.name] = node;
        this.edges[node.name] = [];
    }

    addEdge(personNode, cityNode) {
        this.edges[personNode.name].push(cityNode.name);
        this.edges[cityNode.name] = this.edges[cityNode.name] || [];
        this.edges[cityNode.name].push(personNode.name);
    }

    getResidents(cityName) {
        return this.edges[cityName].filter(nodeName => this.nodes[nodeName].type === 'person').map(personName => this.nodes[personName]);
    }
}

// Crear nodos para personas
let person1 = new Node("Juan", 30, "person");
let person2 = new Node("Ana", 25, "person");
let person3 = new Node("Carlos", 35, "person");

// Crear nodos para ciudades
let city1 = new Node("Madrid", null, "city");
let city2 = new Node("Barcelona", null, "city");

// Crear un nuevo grafo
let graph = new Graph();

// Agregar nodos al grafo
graph.addNode(person1);
graph.addNode(person2);
graph.addNode(person3);
graph.addNode(city1);
graph.addNode(city2);

// Establecer las conexiones entre las personas y las ciudades
graph.addEdge(person1, city1);
graph.addEdge(person2, city1);
graph.addEdge(person3, city2);

// Obtener la lista de residentes de una ciudad
console.log(graph.getResidents("Madrid"));  // Imprime los detalles de Juan y Ana
console.log(graph.getResidents("Barcelona"));  // Imprime los detalles de Carlos