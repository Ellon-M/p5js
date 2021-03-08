function Peg(x, y, r) {
    var options = {
        friction: 0.1,
        restitution: 0.6,
        isStatic: true
    }
    this.body = Bodies.circle(x, y, r, options)
    this.r = r;
    World.add(world, this.body);
 
   
    Peg.prototype.show = function() {
    fill(0, 190, 10);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    circle(0, 0, this.r*2);
    pop();
    }
 }