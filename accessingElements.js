

/*
Accessing Elements
Each element in an array has a numbered 
position known as its index. We can access 
individual items using their index, which is similar to 
referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, 
meaning the positions start counting from
 0 rather than 1. Therefore, the first item in an array 
 will be at position 0. Let’s see how we could access 
 an element in an array:
*/

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
// console.log(listItem);
// console.log(famousSayings[2]);
console.log(famousSayings[2]);

// console log prints "Where there is love there is life."
//console.log(famousSayings[3]); prints undefined because there is no item at position 3.

// you can update an 
// element in an array by assigning a new value to its index
famousSayings[0] = 'A good joke is a very serious thing.';
console.log(famousSayings[0]);

// you can find out the length of an array using the length property
console.log(famousSayings.length);
// this prints 3


// you can add an element to the end of an array using the push method
famousSayings.push('NEW ELEMENT');
console.log(famousSayings);
//prints ["Fortune favors the brave.", "A joke is a very serious thing.", "Where there is love there is life.", "NEW ELEMENT"]

// we can remove an element from the end of an array using the pop method
const removed = famousSayings.pop();
famousSayings.pop();
console.log(famousSayings);
// prints ['A good joke is a very serious thing.', 'Where there is love I am there.']

//we can remove the first element of an array using the shift method but first we have to save the first element to a variable
const removed = famousSayings.shift();
famousSayings.shift();
console.log(famousSayings);
// prints

// we can add an element to the beginning of an array using the unshift method first thing we have to do is save the first element to a variable
const add = famousSayings.unshift('NEW ELEMENT23');
console.log(famousSayings);
// prints ['NEW ELEMENT23', 'A good joke is a very serious thing.', 'Where there is love I am there.']

// we can find the index of an element in an array using the indexOf method
console.log(famousSayings.indexOf('A good joke is a very serious thing.'));
// prints 1

// functions can also mutate arrays in the same way as we can mutate objects
//lets write the function that will add a new element to the end of an array
function addItem(arr, item) {
    arr.push(item);
}   // end of function  addItem
// now we can call the function
addItem(famousSayings, 'NEW ELEMENT');  // this will add the element to the end of the array
console.log(famousSayings);
// prints ['NEW ELEMENT23', 'A good joke is a very serious thing.', 'Where there is love I am there.', 'NEW ELEMENT']
