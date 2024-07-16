let score = undefined

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true =>1; false =>0
// null => number; undefined => NaN

let isLoggedIn = "prerna"

let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// 1 => true; 0 =>false
// "" => false
// "prerna" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***********************************Operations**************************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Duniya!!"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log( 1 + "2");
// console.log("1" + 2 + 2);
// console.log( 1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);
/*This operation without brackets are jsut for exam purpose
  and in industry these are not suggested adn not a good option
  */
           
//   console.log(true);// true is Boolean (+ is not recommended)
//   console.log(+true);// Adding a "+" sign converts true into integer (+ is not recommended)
//   console.log(+ "");//  For blank it gives false adn due to the "+" sign it gives value 0 (+ is not recommended)

  let num1, num2, num3

  num1 = num2 = num3 = 2 + 2// Code readability should be high ,there are better to implement this type of problems
  
  let gameCounter = 100
  ++gameCounter;
  console.log(gameCounter);

  // Link to Operators
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment