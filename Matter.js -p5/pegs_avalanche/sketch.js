var Engine = Matter.Engine,
// Render = Matter.Render,
// Runner = Matter.Runner,
// Composite = Matter.Composite,
// Composites = Matter.Composites,
// Common = Matter.Common,
// MouseConstraint = Matter.MouseConstraint,
// Mouse = Matter.Mouse,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var bounds = [];
var pegs = [];
var cols = 21;
var rows = 20;

function setup() {
  createCanvas(600, 740);
  engine = Engine.create();
  world = engine.world;
  //world.gravity.y = 1.5;
  newParticle();
  newPeg();
  newBounds();
  floor = new Floor(300, 735, 600, 25);
}

function newParticle() {
  var p = new Particle(300, 20, 5);
  particles.push(p);
}

function newPeg() {
  var spacing = width / cols;
  for (j = 0; j < rows; j++) {
      for (i = 0; i < cols; i++) {
        var x = i * spacing;
        if (j % 2 == 0){
          x +=spacing/2;
        }
        var y = spacing*2 + (j * spacing);
        var p = new Peg (x, y, 2.5);
        pegs.push(p);
      }
  }
}

function newBounds() {
var spacing = width / cols;
  for (i = 0; i < cols + 1; i++) {
   var x = i * spacing;
   var h = 75;
   var y = height - h/2;
   var b = new Bound(x, y, 10, h);
   bounds.push(b);
 }
}

console.log(pegs);

function draw() {
  if (frameCount % 40 == 0) {
    newParticle();
  }

  background(51);
  Engine.update(engine, 1000/60);

  for (var i = 0; i < particles.length; i++){
    particles[i].show();
    if (particles[i].offScreen()) {
         particles[i].removeFromWorld();
         particles.splice(i, 1);
         //to avoid skipping elements in the array
         i--;
    }
  }
  for (var i = 0; i < pegs.length; i++){
    pegs[i].show();
  }

  for (var i = 0; i < bounds.length; i++){
    bounds[i].show();
  }


  floor.show();
}

function Floor(x, y, w, h) {
  var options = {
        isStatic: true
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
     push();
     translate(pos.x, pos.y);
     rectMode(CENTER);
     fill(0);
     stroke(255);
     rect(0, 0, this.w, this.h);
     pop();
  }

}


