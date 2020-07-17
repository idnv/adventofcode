
//read input from file
const input = require('fs')
    .readFileSync('./Day6/input.txt')
    .toString()

//take input and make it a dictinioary [node] = fatherNode
var treeMap = new Object();
input.split('\n').forEach(row => treeMap[row.split(')')[1]] = row.split(')')[0]);
//Claculate sum of All Degrees
var sum = 0;
var degree = 0;
var parents = new Array();

const root = getRootValue(treeMap);
console.debug("Tree root is: " + root)
parents.push(getRootValue(treeMap));

console.debug("child: " + getChildren(treeMap, root))

while (parents.length) {
    sum += parents.length * degree;
    degree++;

    parents = parents.flatMap(p => getChildren(treeMap, p));
}
console.log("Total sum is: " + sum);


function getRootValue(tree) {
    const isChildren = (p) => treeMap.hasOwnProperty(p);
    return Object.entries(tree).map(([_, parent]) => parent).find(p => !isChildren(p));
}

function getChildren(tree, parent) {
    return Object.entries(tree).filter(([_, p]) => p == parent).map(([child, _]) => child);
}
