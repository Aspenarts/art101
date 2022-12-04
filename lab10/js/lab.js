/**
 * Author:    Caitlin Morgan
 * Created:   10.26.2022
 * Based off of assignment by Wess Modes
 *
 **/
//sortUserName - a function that takes user input and sorts the letters
var buttonEl = document.getElementById("mybutton");
var outputEl = document.getElementById("output");
var inputEl = document.getElementById("form-field");
console.log("user input =", inputEl);


//console.log("button element:", buttonEl);
//add an input and add an output o7 ( append )
buttonEl.addEventListener('click', function(){
  var userName = inputEl.value;
  var newName = sortUserName(userName);
  console.log("sortef name =", newName);

  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});

function sortUserName(input) {
  var userName = String(input);
  //split string to Arrays
  var colorArray = userName.split('');
  console.log("colorArray =", colorArray);
  //sort the Arrays
  var colorArraySort = colorArray.sort();
  console.log("colorArraySort =", colorArraySort);
  //Join array back to a string
  var colorSorted = colorArraySort.join('');
  console.log("colorSorted =", colorSorted);
  //also could be a single line:
  // favoriteColor.toLower().split("").sort().join("")
  return colorSorted;
}
