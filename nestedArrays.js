// example of nested arrays is used to store data in a tree structure
// the tree is a nested array of arrays
// the first array is the root node
// the second array is the first child of the root node
// the third array is the second child of the root node

const nestedArray = [   
    ['root', ['child1', 'child2'], ['child3', 'child4']],
    ['root2', ['child5', 'child6'], ['child7', 'child8']],
    ['root3', ['child9', 'child10'], ['child11', 'child12']]
];

// lets make a variable named target using const keyword and assign to access the element child8
const target = nestedArray[1][2][1];
//prints    child8