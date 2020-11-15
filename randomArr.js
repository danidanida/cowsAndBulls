// RANDOM ARRAY 

function getRandom (from, to) {
    return Math.floor(from + Math.random()*(to + 1 - from))
  }
 
// Getting array of 4 random digits 

  /* var number1 = getRandom(1, 9)
  var number2 = getRandom(1, 9) 
  if (number2 === number1) {
     number2 = getRandom(1, 9)
  }
  var number3 = getRandom(1, 9)
  if (number3 === number2 || number3 === number1) {
     number3 = getRandom(1, 9)
  }
  var number4 = getRandom(1, 9)
  if (number4 === number3 || number4 === number2 || number4 == number1) {
     number4 = getRandom(1, 9)
  }
  */ 

 var number1, number2, number3, number4

  number1 = getRandom(1, 9) 

do {
    number2 = getRandom(1, 9)
 } while (number2 === number1)

 
do {
    number3 = getRandom(1, 9)
 }  while (number3 === number2 || number3 === number1)

do {
    number4 = getRandom(1, 9)
 } while (number4 === number3 || number4 === number2 || number4 === number1)

 console.log(number1, number2, number3, number4)