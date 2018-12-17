/* Triangle Game Javascript */

// variables
let gameStarted = false;
var resetButton = document.querySelector("#reset");
var circleOne = document.querySelector("#\\31 ");
var allCircles = document.querySelectorAll(".circle");
var moveCount = 0;
var x = "";
var y = "";
var r = "";
var movesByPlay = [];
var startClick = false;

//decision tree - first 3 moves
var moves = [{
      play: 1,
      start: 6,
      remove: 3,
      end: 1
   },
   {
      play: 1,
      start: 4,
      remove: 2,
      end: 1
   },
   {
      play: 2,
      start: 15,
      remove: 10,
      end: 6
   },
   {
      play: 2,
      start: 13,
      remove: 9,
      end: 6
   },
   {
      play: 2,
      start: 8,
      remove: 5,
      end: 2
   },
   {
      play: 2,
      start: 4,
      remove: 5,
      end: 6
   },
   {
      play: 2,
      start: 6,
      remove: 5,
      end: 4
   },
   {
      play: 2,
      start: 9,
      remove: 5,
      end: 2
   },
   {
      play: 2,
      start: 13,
      remove: 8,
      end: 4
   },
   {
      play: 2,
      start: 11,
      remove: 7,
      end: 4
   },
   {
      play: 3,
      start: 8,
      remove: 5,
      end: 3
   },
   {
      play: 3,
      start: 8,
      remove: 9,
      end: 10
   },
   {
      play: 3,
      start: 13,
      remove: 14,
      end: 15
   },
   {
      play: 3,
      start: 2,
      remove: 5,
      end: 9
   },
   {
      play: 3,
      start: 4,
      remove: 8,
      end: 13
   },
   {
      play: 3,
      start: 8,
      remove: 5,
      end: 3
   },
   {
      play: 3,
      start: 10,
      remove: 6,
      end: 3
   },
   {
      play: 3,
      start: 7,
      remove: 8,
      end: 9
   },
   {
      play: 3,
      start: 11,
      remove: 12,
      end: 13
   },
   {
      play: 3,
      start: 15,
      remove: 14,
      end: 13
   },
   {
      play: 3,
      start: 15,
      remove: 10,
      end: 6
   },
   {
      play: 3,
      start: 14,
      remove: 9,
      end: 5
   },
   {
      play: 3,
      start: 13,
      remove: 9,
      end: 6
   },
   {
      play: 3,
      start: 10,
      remove: 9,
      end: 8
   },
   {
      play: 3,
      start: 1,
      remove: 3,
      end: 6
   },
   {
      play: 3,
      start: 14,
      remove: 9,
      end: 5
   },
   {
      play: 3,
      start: 13,
      remove: 8,
      end: 4
   },
   {
      play: 3,
      start: 12,
      remove: 8,
      end: 5
   },
   {
      play: 3,
      start: 11,
      remove: 7,
      end: 4
   },
   {
      play: 3,
      start: 10,
      remove: 6,
      end: 3
   },
   {
      play: 3,
      start: 1,
      remove: 2,
      end: 4
   },
   {
      play: 3,
      start: 1,
      remove: 3,
      end: 6
   },
   {
      play: 3,
      start: 7,
      remove: 4,
      end: 2
   },
   {
      play: 3,
      start: 12,
      remove: 8,
      end: 5
   },
   {
      play: 3,
      start: 13,
      remove: 9,
      end: 6
   },
   {
      play: 3,
      start: 14,
      remove: 9,
      end: 5
   },
   {
      play: 3,
      start: 15,
      remove: 10,
      end: 6
   },
   {
      play: 3,
      start: 1,
      remove: 2,
      end: 4
   },
   {
      play: 3,
      start: 7,
      remove: 4,
      end: 2
   },
   {
      play: 3,
      start: 11,
      remove: 7,
      end: 4
   },
   {
      play: 3,
      start: 12,
      remove: 8,
      end: 5
   },
   {
      play: 3,
      start: 13,
      remove: 9,
      end: 6
   },
   {
      play: 3,
      start: 14,
      remove: 9,
      end: 5
   },
   {
      play: 3,
      start: 15,
      remove: 10,
      end: 6
   },
   {
      play: 3,
      start: 3,
      remove: 5,
      end: 8
   },
   {
      play: 3,
      start: 6,
      remove: 9,
      end: 13
   },
   {
      play: 3,
      start: 7,
      remove: 4,
      end: 2
   },
   {
      play: 3,
      start: 9,
      remove: 5,
      end: 2
   },
   {
      play: 3,
      start: 10,
      remove: 9,
      end: 8
   },
   {
      play: 3,
      start: 9,
      remove: 5,
      end: 2
   },
   {
      play: 3,
      start: 9,
      remove: 8,
      end: 7
   },
   {
      play: 3,
      start: 13,
      remove: 12,
      end: 11
   }
]


//start - reset toggle button
resetButton.addEventListener("click", function () {
   if (!gameStarted) {
      // start game
      startGame();

      if (moveCount === 0) {
         moveCount++;
         console.log("moveCount first " + moveCount);
      }

   } else {
      // reset all circles to green
      resetCircles();
   }
});

// function to start game
function startGame() {
   circleOne.style.backgroundColor = "black";
   gameStarted = true;
}

// function to reset circle colors
function resetCircles() {
   //reset all circles color to green
   for (i = 0; i < allCircles.length; i++) {
      allCircles[i].style.backgroundColor = "green";
      allCircles[i].style.border = "none";
   }
   // reset game, count of moves and move variables
   gameStarted = false;
   moveCount = 0;
   x = "";
   y = "";
   r = "";
}


// function changes circle color onclick if game started
window.onload = function () {
   var anchors = document.getElementsByClassName("circle");
   for (var i = 0; i < anchors.length; i++) {
      var anchor = anchors[i];
      anchor.onclick = function () {

         if(!startClick){
            x = this.id;
            console.log("onclick - x id = " + x);
         
                  if (moveCount === 0) {
                      x = "";
                      y = "";
                      r = "";

                   } else {
                      getMovesByPlay(x);
                      console.log('OnClick Valid play Array\n', movesByPlay);
                      findStartValue(movesByPlay, x);
                  }
         } else{
         y = this.id;
            console.log("onclick - y id = " + y);
            findEndValue(movesByPlay, y, x);
         }

      }
   }
}

// function gets play number filtered array
function getMovesByPlay(x) {
   function filterByPlay(item) {
      if (item.play === moveCount) {
         return true;
      }
   }
   movesByPlay = moves.filter(filterByPlay);
   console.log('filtered getMovesbyPlay \n', movesByPlay);
   return movesByPlay;
}

// function finds valid start value and changes circle border color
function findStartValue(movesByPlay, x) {
   for (var i = 0; i < movesByPlay.length; i++) {
      console.log("individual arrays " + movesByPlay[i].start);
      console.log("x =" + x);
      if (movesByPlay[i].start === Number(x) ){
         // document.getElementById(x).style.backgroundColor = '#98FB98';
         document.getElementById(x).style.border = '4px solid #000';
         startClick = true;
         break;
      }
   }
}

// function finds valid end value and changes background start, end, delete circles
function findEndValue(movesByPlay, y, x) {
   for (var j = 0; j < movesByPlay.length; j++) {
      console.log("individual arrays " + movesByPlay[j].end);
      console.log("y =" + y);
          if (movesByPlay[j].end === Number(y) && movesByPlay[j].start === Number(x)){
                r =  movesByPlay[j].remove;
                console.log("remove value: " + r);
                  document.getElementById(y).style.backgroundColor = 'green';
                  document.getElementById(x).style.backgroundColor = 'black';
                  document.getElementById(r).style.backgroundColor = 'black';
                  startClick = false;
                  moveCount++;
               break;
      
      }
   }
}