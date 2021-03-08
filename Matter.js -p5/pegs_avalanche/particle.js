function Particle(x, y, r) {
    var options = {
         friction: 0.2,
         restitution: 0.6,
    }
   this.hue = random(360);
   x += random(-1, 1);
   this.body = Bodies.circle(x, y, r, options)
   this.r = r;
   World.add(world, this.body);

Particle.prototype.offScreen = function() {
     var x = this.body.position.x;
     var y = this.body.position.y;
     return (x < -50 || x > width + 50 || y > height + 50);
}

Particle.prototype.removeFromWorld = function() {
     World.remove(world, this.body);
}

Particle.prototype.show = function() {
   fill(250);
   var pos = this.body.position;
   push();
   translate(pos.x, pos.y);
   circle(0, 0, this.r*2);
   pop();
   }
}