/**
 * Author:    Caitlin Morgan
 * Created:   10.26.2022
 * Based off of assignment by Wess Modes
 *
 **/
//sortUserName - a function that takes user input and sorts the letters
buttonEl = document.getElementById("mybutton");
console.log("button element:", buttonEl);

buttonEl.addEventListener("sortUserName", function(){
  var userName = inputEl.value;
  var newName = sortUserName(userName);
  outputEl = "<p id=name-results>" + newName + "</p>";
  });

function sortUserName() {
  var favoriteColor = window.prompt("Hi! Tell me your favorite color so I can make you a new one.");
  console.log("favoriteColor =", favoriteColor);
  //split string to Arrays
  var colorArray = favoriteColor.split('');
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
