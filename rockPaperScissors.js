/* 
this function takes in a single parameter called userChoice.
we use an if statement to check if the userChoice is equal to. 
this helps the program understand the choices the user makes.
we return the userChoice.
else we return error.
*/

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
      return userInput;
 }else {
 console.log('Error, please type: rock, paper or scissors.');
    }
  }
 
 const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber){
   case 0:
     return 'rock';
   case 1: 
     return 'paper';
   case 2: 
     return 'scissors';
   }
 };
 
 /*
function determineWinner has two parameters called userChoice and computerChoice.
it returns a string that says who won or game is tie.
we use an if statement to check if the userChoice is equal to.
this helps the program understand the choices the user makes.
we return the userChoice.
else we return error.
 */

 const determineWinner = (userChoice, computerChoice) => {
   if (userChoice === computerChoice) {
     return 'This Game is a tie!';
   }
 
   if (userChoice === 'rock') {
     if (computerChoice === 'paper'){
       return "Sorry, Computer won!";
     } else {
       return "Congratulations, you won!";
     } 
   }
 
     if (userChoice === 'paper') {
     if (computerChoice === 'scissors'){
       return "Sorry, Computer won!";
     } else {
       return "Congratulations, you won!";
     } 
     }
 
      if (userChoice === 'scissors') {
     if (computerChoice === 'rock'){
       return "Sorry, Computer won!";
     } else {
       return "Congratulations, you won!";
     } 
      }
      if (userChoice === 'bomb'){
        return "Congratulations, you won!";
      } 
 
 };
 
 /*
Create a function named playGame.

Inside the playGame() function, create a variable named userChoice set equal 
to the result of calling getUserChoice(), 
passing in either 'rock', 'paper', or 'scissors' as an argument.

Create another variable named computerChoice, 
and set it equal to the result of calling getComputerChoice().

Under both of these variables, 
use console.log to print them to the console

 */
 
 const playGame = () =>{
   const userChoice = getUserChoice('bomb');
   const computerChoice = getComputerChoice();
   
   console.log('You threw:' + userChoice);
   console.log('The Computer threw:' + computerChoice);
 
 console.log(determineWinner(userChoice, computerChoice));
 
 };
 
//  playGame(); can be used to test the function/play the game.
 playGame()
 
 
 