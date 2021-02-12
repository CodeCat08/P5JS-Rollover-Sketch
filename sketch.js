/*
This program demonstrates conditional logic (if, else, true, false).
If the mouse is within the drawn rectangle, the rectangle is filled
with a color. If the user clicks inside the rectangle, its color is
changed to a random color.
*/

let rect1 ={
  x:10,
  y:10,
  w:100,
  h:100,
  r:255,
  g:255,
  b:255
};

let on = false;

function setup() {
  createCanvas(600, 400);
  
  //center the rectangle in window
  rect1.x = (width / 2) - (rect1.w / 2);
  rect1.y = (height / 2) - (rect1.h / 2);
}

function draw() {
  //black background
  background(0);
  
  //white strokes
  stroke(255);
  //stroke thickness '4'
  strokeWeight(4);
  //transparent shape fill
  noFill();
  
  //if the mouse's X & Y position is within the rectangle,
  //then draw the rectangle's fill color
  if (mouseX > rect1.x && mouseX < (rect1.x+rect1.w) && mouseY > rect1.y && mouseY < (rect1.y+rect1.h)) {
    fill(rect1.r,rect1.g,rect1.b);
  }
  
  //draw rectangle
  rect(rect1.x,rect1.y,rect1.w,rect1.h);
}

//when the mouse is pressed, if the mouse is pressed within the
//bounds of the rectangle, then negate the on condition and change
//the fill color of the rectangle.
function mousePressed() {
  if (mouseX > rect1.x && mouseX < rect1.x + rect1.w && mouseY > rect1.y && mouseY < rect1.y + rect1.h) {
    on = !on;
    rect1.r = random(0,255);
    rect1.g = random(0,255);
    rect1.b = random(0,255);
  }
}