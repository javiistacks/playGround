var userName = 'Javi';

userName ? console.log(`Hello ${userName} !`):
console.log('Hello!');

let userQuestion = 'Can you answer my question';
console.log(` The user asked: ${userQuestion} ${userName}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber){
case 0:
  eightBall = 'It is certain';
  break;
case 1:
  eightBall = 'It is decidedly so';
  break;
case 2:
  eightBall = 'Reply hazy try again';
  break;
case 3:
  eightBall = 'Cannot predict now';
  break;
case 4:
  eightBall = 'Do not count on it';
  break;
case 5:
  eightBall = 'My sources say no';
  break;
case 6:
  eightBall = 'Outlook not so good';
  break;
case 7:
  eightBall = 'Signs point to yes';
  break;
}

console.log('eightBall');

// race day!! 1/03/2022

// generates a random number 
let raceNumber = Math.floor(Math.random() * 1000);

// checks if runner is early
let early = true;

// checks if runner is over 18 
let age = 18; 

//  if statement to check if runner is over 18 and assigns a number to the runner
if(early && age > 18){
raceNumber += 1000; 
}

// if statement to check if runner is under 18 and early
if(early && age > 18){
console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
}

// if statement to check if runner is early and over 18
 else if (!early && age > 18){
console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
}
else if (age < 18 ){
  console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`);
}

else {
  console.log('Please approach the registration desk, thanks!');
}


// DEFAULT PARAMETERS
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 ='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  

//  MULTIPLY PARAMETERS
// function multiply(num1, num2){
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5, 4);
  
  console.log(numOfMonitors);
  

// HELPER Functions
// We can also use the return value of a function inside 
// another function. These functions being called within 
// another function are often referred to as helper 
// functions. Since each function is carrying 
// out a specific task, it makes our code easier to read and 
// debug if necessary.
// ANSWER:4000
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
   return monitorCount(rows, columns)  * 200;
  }
  
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);


//    ****************************************************************
//    ****************************************************************
//    ****************************************************************

// Create a variable named plantNeedsWater 
// using the const variable keyword.
// Create a variable named plantNeedsWater 
// using the const variable keyword.
const plantNeedsWater = function(day) {
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  };
  
  plantNeedsWater('Tuesday');
  
  console.log(plantNeedsWater('Tuesday'));

//   ****************************************************************
//   ****************************************************************
// ARROW FUNCTIONS 
// eliminiates the need for the function keyword
  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };


//   ****************************************************************
const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
  };

//   concise body arrow function
// below is the same as the above. we can shorten the code by using the arrow function
const plantNeedsWater = day => day === 'Wednesday' ? true : false;


