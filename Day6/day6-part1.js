
//read input from file
const input = require('fs')
  .readFileSync('C:\\Users\\Visitor\\adventofcode\\adventofcode\\Day6\\input.txt')
  .toString()

//take input and make it a dictinioary [node] = fatherNode
var treeMap = new Object();
input.split('\r\n').forEach(row=> treeMap[row.split(')')[1]] = row.split(')')[0]);
//Claculate sum of All Degrees
var sum = 0;
var degree = 0;
var parents = new Array();
var childs = new Array();
parents.push(getRootValue(treeMap));

while(parents.length){
    sum += parents.length * degree;
    degree++;
    for(var parent of parents){
        for (var node in treeMap){            
            if(treeMap[node] == parent){
                childs.push(node);
             }
        }
        //childes = childs.concat(getChildrens(treeMap,parent));
    }
    parents = childs.slice();
    childs = [];
}
console.log("sum" + sum);


function getRootValue(tree){
    var headOfTree;
    for(var index in treeMap){
        if(!treeMap.hasOwnProperty(treeMap[index]))
            return treeMap[index];
    }
}

function getChildrens(tree, parent){
    var nodes = Object.keys(tree).reduce((nodes,node) => {
        if (tree[node] == parent){
          nodes[node] = parent;
        }
        return nodes;
        },{});
    return Object.keys(nodes);
}
