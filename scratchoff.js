/*
goal: to create a scratch off game that will reveal a number when the mouse is dragged over a div box

scratch off box = scratchCover
number box = numberBox

step 1: build div box that will fade when the mouse is dragged over it
*/

var op = 1;
function scratchMe() {
  
  op -=0.1;
  //test to see if the op is decreasing
  document.getElementById('test').innerHTML = op;
  document.getElementById('scratchMe').style.opacity = op;
}
