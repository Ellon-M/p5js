let x, y;
let r, g, b;
let radius = 100;
let score = 0;


function setup() {
 createCanvas(windowWidth, windowHeight);

 //random color values at the start
 r = random(255);
 g = random(255);
 b = random(255);

 //random coordinates at the start


}

function draw() {
  background(10);
  fill(r, g, b, 300);
  ellipse(x , y, radius * 2, radius *2);
  noStroke();
  //coordinates of a rectangular area to display the text
  rect(0, 0, windowWidth, 70);

  //coordinates of a rectangular area to display the text
  fill(250);
  if (score >= 0 && score < 15) {
    var level0 = "EASY";
    text("Level: " + level0 , 0, 18, 200, 70 );
  }
  if (score >= 25 && score < 50) {
    var level1 = "MEDIUM";
    text("Level: " + level1 , 10, 18, 250, 70 );
  }
  if (score >= 50) {
    var level2 = "HARD";
    text("Level: " + level2 , 10, 18, 200, 70 );
  }

  
  
  fill(250);
  textFont('Gabriola');
  text("score: " + score , windowWidth/2.15, 18, 100, 70 );
  textAlign(CENTER);
  textSize(32);
}

function mousePressed() {
  //distance btwn 2 coordinates
    let d = dist(mouseX, mouseY, x, y);
if (d < radius) {
  newCircle();
  score++;
     if (score == 25) {
       radius = radius/1.2;
       setInterval(newCircle, 900);
       

     }
     if (score == 50) {
      radius = radius/1.35;
      setInterval(newCircle, 850);
     
    }
  }
    

}

function newCircle() {
  x = random(100, windowWidth - 100);
  y = random(170, windowHeight - 100);

  r = random(255);
  g = random(255);
  b = random(255);
}

function setLevel() {

  if (score == 0) {
    var level0 = "EASY";
  }

  if (score == 25) {
    var level1 = "MEDIUM";
  }

}
if (score == 50) {
  var level2 = "HARD";
}

setInterval(newCircle, 1000);
