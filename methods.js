let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
/*

1.Below the retreatMessage variable in the code editor, 
create an alienShip object. 
It should contain a method .retreat() 
which will console.log() the retreatMessage.

2.Add another method to your object literal. 
This method, .takeOff(), should console.log() 
the string
 'Spim... Borp... Glix... Blastoff!'

 */

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
     console.log('Spim... Borp... Glix... Blastoff!')
}
};





/*
Invoke your two methods: first .retreat() then .takeOff().
 */

alienShip.retreat(),
alienShip.takeOff()