var Engine = Matter.Engine,
// Render = Matter.Render,
// Runner = Matter.Runner,
// Composite = Matter.Composite,
Composites = Matter.Composites,
// Common = Matter.Common,
 MouseConstraint = Matter.MouseConstraint,
 Mouse = Matter.Mouse,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var slopes = []; 
var stack;
var mConstraint;

function setup() {
  var canvas = createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  slopes.push(new Slope(200, 150, 400, 20, 0.3));
  slopes.push(new Slope(600, 400, 500, 20, -0.3));
  

  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, {
      mouse: canvasmouse,

  })

  World.add(world, mConstraint);
}
function draw() {
   background(51);
   Engine.update(engine);

   if (frameCount % 20 == 0) {
      particles.push(new Particle(200, 10, random(20, 40)));
   }
  

   for (var i = 0;  i < particles.length; i++) {
    particles[i].show();
      if (particles[i].isOffScreen()) {
        particles[i].removeFromWorld();
        particles.splice(i, 1);
        i--;
      }
   }
   for (var i = 0;  i < slopes.length; i++) {
    slopes[i].show();
   } 

}







