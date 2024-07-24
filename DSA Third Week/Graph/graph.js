
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    add_vertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    add_Edge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.add_vertex(vertex1)
        if (!this.adjacencyList[vertex2]) this.add_vertex(vertex2)
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    had_Edge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    remove_Edge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    remove_Vertex(vertex) {
        if (!this.adjacencyList[vertex]) return;

        for (let adjecentVertex of this.adjacencyList[vertex]) {
            this.remove_Edge(vertex, adjecentVertex)
        }
        delete this.adjacencyList[vertex];
    }


    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' : ' + [...this.adjacencyList[vertex]]);
        }
    }

    bfs(startVertex) {
        let visited = new Set()
        let queue = [startVertex]
        while (queue.length > 0) {
            let currentVertex = queue.shift()
            if (!visited.has(currentVertex)) {
                console.log(currentVertex);
                visited.add(currentVertex)

                for (let neighbor of this.adjacencyList[currentVertex]) {
                    if (!visited.has(neighbor)) queue.push(neighbor)
                }
            }
        }
    }

    dfs(startVertex) {
        let visited = new Set()
        const dfsHelper = (vertex => {
            console.log(vertex);
            visited.add(vertex)

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) dfsHelper(neighbor)
            }
        })
        dfsHelper(startVertex)
    }
}

const graph = new Graph()
graph.add_vertex(1)
graph.add_vertex(4)
graph.add_vertex(2)
graph.add_vertex(6)
graph.add_vertex(3)
graph.add_vertex(5)


graph.add_Edge(1, 2)
graph.add_Edge(2, 3)
graph.add_Edge(4, 2)
graph.add_Edge(4, 1)
graph.add_Edge(4, 5)
graph.add_Edge(6, 1)
graph.add_Edge(6, 2)


graph.display()

// console.log(graph.hadEdge(4, 5));

// graph.removeVertex(6)
// graph.display()

graph.bfs(1)
console.log("--->");
graph.dfs(1)


