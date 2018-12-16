/* Triangle Game Javascript */

// variables
let gameStarted = false;
var circleArrayGreen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var circleArrayBlack = [];
var resetButton = document.querySelector("#reset");
var circleOne = document.querySelector("#one");
var allCircles = document.querySelectorAll(".circle");
var moveCount = 2;

//decision tree - first 3 moves
var moves = [
   {play: 1, start: 6, remove: 3, end: 1},
   {play: 1, start: 4, remove: 3, end: 1},
   {play: 2, start: 15, remove: 10, end: 6},
   {play: 2, start: 13, remove: 9, end: 6},
   {play: 2, start: 8, remove: 5, end: 2},
   {play: 2, start: 4, remove: 5, end: 6},
   {play: 2, start: 6, remove: 5, end: 4},
   {play: 2, start: 9, remove: 5, end: 2},
   {play: 2, start: 13, remove: 8, end: 4},
   {play: 2, start: 11, remove: 7, end: 4},
   {play: 3, start: 8, remove: 5, end: 3},
   {play: 3, start: 8, remove: 9, end: 10},
   {play: 3, start: 13, remove:14, end: 15},
   {play: 3, start: 2, remove: 5, end: 9},
   {play: 3, start: 4, remove: 8, end: 13},
   {play: 3, start: 8, remove: 5, end: 3},
   {play: 3, start: 10, remove:6, end: 3},
   {play: 3, start: 7, remove: 8, end: 9},
   {play: 3, start: 11, remove: 12, end: 13},
   {play: 3, start: 15, remove: 14, end: 13},
   {play: 3, start: 15, remove: 10, end: 6},
   {play: 3, start: 14, remove: 9, end: 5},
   {play: 3, start: 13, remove: 9, end: 6},
   {play: 3, start: 10, remove: 9, end: 8},
   {play: 3, start: 1, remove: 3, end: 6},
   {play: 3, start: 14, remove: 9, end: 5},
   {play: 3, start: 13, remove: 8, end: 4},
   {play: 3, start: 12, remove: 8, end: 5},
   {play: 3, start: 11, remove: 7, end: 4},
   {play: 3, start: 10, remove: 6, end: 3},
   {play: 3, start: 1, remove: 2, end: 4},
   {play: 3, start: 1, remove: 3, end: 6},
   {play: 3, start: 7, remove: 4, end: 2},
   {play: 3, start: 12, remove: 8, end: 5},
   {play: 3, start: 13, remove: 9, end: 6},
   {play: 3, start: 14, remove: 9, end: 5},
   {play: 3, start: 15, remove: 10, end: 6},
   {play: 3, start: 1, remove: 2, end: 4},
   {play: 3, start: 7, remove: 4, end: 2},
   {play: 3, start: 11, remove: 7, end: 4},
   {play: 3, start: 12, remove: 8, end: 5},
   {play: 3, start: 13, remove: 9, end: 6},
   {play: 3, start: 14, remove: 9, end: 5},
   {play: 3, start: 15, remove:10 , end: 6},
   {play: 3, start: 3, remove: 5, end: 8},
   {play: 3, start: 6, remove: 9, end: 13},
   {play: 3, start: 7, remove: 4, end: 2},
   {play: 3, start: 9, remove: 5, end: 2},
   {play: 3, start: 10, remove: 9, end: 8},
   {play: 3, start: 9, remove: 5, end: 2},
   {play: 3, start: 9, remove: 8, end: 7},
   {play: 3, start: 13, remove:12, end: 11}
]


//start - reset toggle button
resetButton.addEventListener("click", function () {
   if (!gameStarted) {
      //function to start game
      startGame();

      //change color circle onClick if valid
      validStart();

   } else {
      //function to reset all circles to green
      resetCircles();
   }
});

//function to start game
function startGame() {
   circleOne.style.backgroundColor = "black";
   gameStarted = true;
   //remove circle 1 from the active array
   delete circleArrayGreen[0];
   //add circle 1 to inactive array
   circleArrayBlack.push(1);
}

//function to reset circle colors
function resetCircles() {
   //reset all circles color to green
   for (i = 0; i < allCircles.length; i++) {
      allCircles[i].style.backgroundColor = "green";
   }
   //reset array contents to start
   circleArrayGreen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
   circleArrayBlack = [];
   gameStarted = false;
}


//Check if circle clicked is valid and change color if it is
function validStart(){
// function to change circle color to white onclick if game started
window.onload = function () {
   var anchors = document.getElementsByClassName("circle");
   for (var i = 1; i < anchors.length; i++) {
      var anchor = anchors[i];
      anchor.onclick = function () {
         var x = this.id;
         //onclick only if game is started
         if (gameStarted) {
            if (document.getElementById(x).style.backgroundColor === 'green') {
               document.getElementById(x).style.backgroundColor = 'white';
            } else if (document.getElementById(x).style.backgroundColor === 'black') {
               document.getElementById(x).style.backgroundColor = 'green';
            }
         }
      }
   }
}
}

function validStart(){

   function filterByPlay(item) {
   if (item.play === moveCount){
     return true;
   }
} 

var movesByPlay = moves.filter(filterByPlay);
console.log('Valid play Array\n', movesByPlay); 
}