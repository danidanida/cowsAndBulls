// VARIABLES DECLARATIONS

var confirmBtn = document.getElementById('confirmBtn')
var mainInput = document.getElementById('mainInput')
var outputGuess = document.getElementById('outputGuess')
var initBtn = document.getElementById('initBtn')
var outputResult = document.getElementById('outputResult')
var numOftryOutput = document.getElementById('numOftryOutput')
var outputResultBulls = document.getElementById('outputResultBulls')

var numToGuess = [number1, number2, number3, number4]; // RANDOM ARRAY
console.log(numToGuess) // for checking purpose

var guessedDigits = []; // GUESSED ARRAY

var outputArr = ["x", "x", "x", "x"] // OUTPUT FOR PLAYER

// BULLS, COWS
var bulls = 0;
var cows = 0;

// ATTEMPTS

var numOftry = 1;
var guessTry = 0;



function checkNumbers() {


  if (mainInput.value != "" && +mainInput.value < 9999 && +mainInput.value > 0 && Number.isInteger(+mainInput.value)== true) { // validation for input

    // creating Array
    guessedDigits = mainInput.value.split("");
    console.log(guessedDigits.length) 
  outputGuess.innerText = "Your choice is " + guessedDigits

// checking for Bulls 
for(var i =0; i<numToGuess.length; i++){
    for(var j=0; j<guessedDigits.length; j++){
        if(numToGuess[i]== guessedDigits[j]) { 
          bulls = bulls + 1; 
          outputResultBulls.innerText = "Your bulls amount = " + bulls} 
         } 
    }
  // Checking for Cows
    for (var i = 0; i<numToGuess.length; i++) {
      if (numToGuess[i] == guessedDigits[i]) {
        if (outputArr[i] != numToGuess[i]) {
          cows = cows + 1
        }
        outputArr[i] = numToGuess[i]
        outputResult.innerText = "Your cows amount = " + cows + "   " + "You guessed: " + outputArr
      } else outputArr[i] = outputArr[i]
    }
    confirmBtn.disabled=true;

    if (cows >= 4) {
      outputResult.innerText = "You WON, you guessed: " + outputArr
    } 

} 
else outputGuess.innerText = "Please enter four digits, from 1 to 9" // validation for input
}

// NEW ROUND 
function initGame() { 
  if (mainInput.value != "")
    if (guessedDigits.length = 3) {
      confirmBtn.disabled=false;
      guessedDigits = [];
      bulls = 0;
      outputGuess.innerText = ""
      numOftry++
      numOftryOutput.innerText = "Your attempt is " + numOftry
      if (numOftry >= 8) {
        outputResult.innerText = "You lose, you extended limit of attempts, the right answer was " + numToGuess
        numToGuess = [];
        numOftry = 0;
        guessedDigits = [];
        initBtn.disabled = true;
        onfirmBtn.disabled = true;
      }
    }
  else outputResult.innerText = "You didn't use your attempt"
}


// EVENT LISTENERS

confirmBtn.addEventListener('click', checkNumbers)
initBtn.addEventListener('click', initGame)