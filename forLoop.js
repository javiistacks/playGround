//example of a for loop that 


// Create a program that loops from 5 to 10 
// and logs each number to the console
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  }
  //prints numbers 5 to 10
  

  //we can loop backwards with a for loop by changing the operator
  for (let counter = 10; counter >= 0; counter--) {
    console.log(counter);
  }
  //prints numbers 10 to zero. 


  const vacationSpots = ['Bali', 'Paris', 'Tulum'];
   //Write a for loop that iterates through
  // our vacationSpots array using i as the iterator variable.
  for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit'+ vacationSpots[i]);
  }
//prints 
// I would love to visit Bali
// I would love to visit Paris
// I would love to visit Tulum

//nested loop
// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};



const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

// do...while statements
/*In some cases, you want a piece of code to run at 
least once and then loop based on a 
specific condition after its initial run. 
This is where the do...while statement comes i 
 */

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);
//this prints out 
//1 cup of sugar added
//2 cup of sugar added
//3 cup of sugar added

//below is an example of the while loop.
/*
the code below will print out all the arrays until spade is called
*/
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}
