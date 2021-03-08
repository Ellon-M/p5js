function Bound(x, y, w, h) {
    var options = {
          isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  
    Bound.prototype.show = function() {
      var pos = this.body.position;
       push();
       translate(pos.x, pos.y);
       rectMode(CENTER);
       fill(0);
       stroke(0, 190, 10);
       rect(0, 0, this.w, this.h);
       pop();
    }
  
  }