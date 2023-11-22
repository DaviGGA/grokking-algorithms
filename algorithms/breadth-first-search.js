let graph = {}

let sellsMango = ['jonny'];

graph['me'] = ['alice','bob','claire'];
graph['bob'] = ['anuj','peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

let queue = graph['me'];


let mangoSellerFound = false;

let notSellers = [];

while (!mangoSellerFound) {

    if (queue.length === 0) {
        console.log('There is no sellers!')
        break;
    }

    let firstOut = queue.shift();
    let isMangoSeller = sellsMango.includes(firstOut);

    if (!notSellers.includes(firstOut)) {
        if (isMangoSeller) {
            console.log("Mango seller found!! It is: " + firstOut);
            mangoSellerFound = true;
        } else {
            console.log(`${firstOut} is not a mango seller`);
            
            notSellers.push(firstOut);
            queue = queue.concat(graph[firstOut])
            
            console.log(`queue: ${queue}`)
        }
    }

    console.log("===========")


}