const graph = {}

graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['end'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['end'] = 5;

graph['end'] = {};


const costs = {}

costs['a'] = 6;
costs['b'] = 2;
costs['end'] = Infinity;

const parents = {}

parents['a'] = 'start';
parents['b'] = 'start';
parents['end'] = null;

const processeds = [];

let node = getSmallerCost(costs);

while (node != null) {
    let cost = costs[node];
    let neighbors = graph[node];

    for (n in Object.keys(neighbors)) {
     let newCost = cost + neighbors[n];
     
     if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
     } 

     processeds.append(node);
     node = getSmallerCost(costs);
    }
}



function getSmallerCost(costs) {
    let smallerAmount = Infinity;
    let smallerCost = null;

    for (let cost in costs) {
        if (costs[cost] < smallerAmount && !processeds.includes(cost)) {
            smallerAmount = costs[cost];
            smallerCost = cost;
        }
    }

    return smallerCost;
}