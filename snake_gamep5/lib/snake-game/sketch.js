let s;
let scl = 20;
let food;
let score = 0;
let backgroundColor;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}


function pickLocation() {
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}


function draw() {
  backgroundColor= background(51);
  if (s.eat(food)) {
    pickLocation();
  } 
  s.update();
  s.show();


  if (s.death()) {
    textSize(20);
    fill(250, 0, 0);
    text("GAME OVER", 248, 280, 200, 70);
    text("PRESS R TO PLAY AGAIN", 175, 340, 400, 70);

    noLoop();
    
  }
  textFont('Courier');
  textSize(30);
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
   s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
   s.dir(0, 1);
  }
  else if (keyCode === LEFT_ARROW) {
   s.dir(-1, 0);
  }
  else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  }
  else if (keyCode === 82) {
    resetGame();
  }
}

function resetGame() {

  s = new Snake();
  frameRate(10);
  pickLocation();
  loop();

}



