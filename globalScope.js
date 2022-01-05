/*
Scope is the context in which our variables are declared. 
We think about scope in relation to blocks because variables 
can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. 
These variables are called global variables. Because global variables 
are not bound inside a block, they can be accessed by any code in 
the program, including code in blocks.

Let’s take a look at an example of global scope
*/
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());



/*
The next context we’ll cover is BLOCK SCOPE. 
When a variable is defined inside a block, it is only accessible to the code 
within the curly braces {}. We say that variable has block scope because it is 
only accessible to the lines of code within that block.

Variables that are declared with block scope are known as local 
variables because they are only available to the code that is 
part of the same block.

Block scope works like this:
*/
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    
    console.log(lightWaves);
  };