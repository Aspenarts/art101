/**
 * Author:    Caitlin Morgan
 * Created:   10.26.2022
 * Based off of assignment by Wess Modes
 *
 **/
 // **setting up the program**
function isEven(x){
  return(x % 2 == 0);
}
 // ------------------------------------
// **checks the numbers inputed as (X)**
// **to see if even or not**
//undefined
//isEven(1)
console.log("Is 1 even? ", isEven(1));
//false
//isEven(2)
console.log("Is 2 even? ", isEven(2));
//true
// ------------------------------------
// **sets up the array of numbers used in assignment**
array = [23, 45, 643, 69, 420, 100000]
console.log("My array", array);
// (6)[23, 45, 643, 69, 420, 100000]
// ------------------------------------
// **tests all numbers to see if even or not**
//array.map(isEven)
var result = array.map(isEven);
//(6)[false, false, false, false, true, true]
console.log("Test of eveness of array: ", result);
 // ------------------------------------
// **does the final math**
//array.map(function(x){
//  return x**0.5;
//})
result = array.map(function(x){
  return x ** 0.5;
})
// (6) [4.795831523312719, 6.708203932499369,
// 25.357444666211933, 8.306623862918075, 20.493901531919196,
// 316.22776601683796]
console.log("Squareroot of array: ", result);


var outputEl = document.getElementById("output");
outputEl.innerHTML = result; //put results here
