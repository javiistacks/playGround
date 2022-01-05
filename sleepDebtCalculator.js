/*
The first problem to solve is determining how many hours of sleep you got each night of the week.

You can create a function that returns any given night’s number of hours of rest. 
Instead of writing seven different functions (one for each day of the week), 
let’s write one function with a parameter for the day.

Create a function named getSleepHours with a single parameter named day

The function should accept a day as an argument and return the number of hours you slept that night.

For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

Use an if/else or switch statement to implement this.

*/


const getSleepHours = day =>{
    switch(day){
     case 'monday': 
       return 8
       break;
     case 'tuesday': 
       return 7
       break;
     case 'wednesday': 
       return 5
       break;
     case 'thursday': 
       return 8
       break;
     case 'friday': 
       return 7
       break;
     case 'saturday': 
       return 7
       break;
     case 'sunday': 
       return 8
       break;
   
       default:
       return "Error!"
   }
   };
   
   const getActualSleepHours = () =>
     getSleepHours('monday') +
     getSleepHours('tuesday') +
     getSleepHours('wednesday') +
     getSleepHours('thursday') +
     getSleepHours('friday') +
     getSleepHours('saturday') +
     getSleepHours('sunday');
   


    /*
To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.

Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.

You’ll want to multiply by 7 to get the total hours you prefer per week.
    */
   const getIdealSleepHours = () =>{
     let idealHours = 8;
     return idealHours *7;
   
   };
   

/*  Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.

Create a function named calculateSleepDebt with no parameters.

Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.

Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call. */
const calculateSleepDebt = () => {
     const actualSleepHours =
     getActualSleepHours();
     const idealSleepHours = 
     getIdealSleepHours();
   
     if (actualSleepHours === idealSleepHours)
     {
       console.log("You've got the perfect amount of sleep!");
     }
   
     else if(actualSleepHours > idealSleepHours){
   console.log("You've got" +(idealSleepHours - actualSleepHours) + "more hours of sleep this week.");
   
     }
   
       else if(actualSleepHours < idealSleepHours){
   console.log("You've should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.");
       }
   
       else {
         console.log ("Error! Something went wrong, check your code.");
       }
   };
   calculateSleepDebt();