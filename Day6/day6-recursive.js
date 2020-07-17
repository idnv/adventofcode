// claculate cross platform path
const path = require('path');
const calcedPath = path.join('Day6', 'input.txt');

//read input from file
const input = require('fs')
    .readFileSync(calcedPath)
    .toString()

//take input and make it a dictinioary [node] = fatherNode
var treeMap = new Object();
const crossPlatformEndOfFile = require('os').EOL; 
input.split(crossPlatformEndOfFile).forEach(row => treeMap[row.split(')')[1]] = row.split(')')[0]);

// Find root and calculate sum
const root = getRootValue(treeMap);
console.debug("Tree root is: " + root)
console.log("Sum: " + caculateSum(treeMap, root))

function caculateSum(tree, root, currentDegree = 0) {
    const children = getChildren(tree, root);
    const childrenSums = children.map(c => caculateSum(tree, c, currentDegree + 1));
    return currentDegree + sum(childrenSums);
}

function sum(arr, initialValue = 0) {
    return arr.reduce((a, b) => a + b, initialValue);
}

function getRootValue(tree) {
    const isChildren = (p) => treeMap.hasOwnProperty(p);
    return Object.entries(tree).map(([_, parent]) => parent).find(p => !isChildren(p));
}

function getChildren(tree, parent) {
    return Object.entries(tree).filter(([_, p]) => p == parent).map(([child, _]) => child);
}
