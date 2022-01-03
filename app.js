// var userName = 'Javi';

// userName ? console.log(`Hello ${userName} !`):
// console.log('Hello!');

// let userQuestion = 'Can you answer my question';
// console.log(` The user asked: ${userQuestion} ${userName}`);

// let randomNumber = Math.floor(Math.random() * 8);

// let eightBall = '';

// switch(randomNumber){
// case 0:
//   eightBall = 'It is certain';
//   break;
// case 1:
//   eightBall = 'It is decidedly so';
//   break;
// case 2:
//   eightBall = 'Reply hazy try again';
//   break;
// case 3:
//   eightBall = 'Cannot predict now';
//   break;
// case 4:
//   eightBall = 'Do not count on it';
//   break;
// case 5:
//   eightBall = 'My sources say no';
//   break;
// case 6:
//   eightBall = 'Outlook not so good';
//   break;
// case 7:
//   eightBall = 'Signs point to yes';
//   break;
// }

// console.log('eightBall');

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