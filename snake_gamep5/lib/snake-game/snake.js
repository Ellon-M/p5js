function Snake() {
    this.x = 0;
    this.y = 0;

    //the direction
    this.xspeed = 1;
    this.yspeed = 0;

    //new food object goes to the empty total
    this.total = 0;
    this.tail = [];
    this.score = 0;

    this.eat = function(pos) {
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            score++;
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        for (i = 0; i < this.tail.length; i++) {
            pos = this.tail[i];
            d = dist(this.x, this.y, pos.x, pos.y);
             if (d < 1) {
                this.total = 0;
                this.tail = []; 
                score = 0;
                return true;
             }
        }
        return false;
    }

    this.dir = function(x, y){
        this.xspeed = x;
        this.yspeed = y;
    }
  
    this.update = function() {
            //shift all the parts backward by 1 (when the snake moves without eating)
            for (let i = 0; i < this.tail.length-1; i++) {
                //last spot
                this.tail[i] = this.tail[i + 1];
        }
            if (this.total >= 1) {
       //put a new spot without shifting (when the snake moves and eats food)
                this.tail[this.total-1] = createVector(this.x, this.y);
            }
      this.x = this.x + this.xspeed * scl;
      this.y = this.y + this.yspeed * scl;

      this.hit();
    }

    this.show = function() {
        fill(255);
        for (i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        fill(255);
        rect(this.x, this.y, scl, scl);

        text("Score: " + score, 205, 595);
    }

    this.hit = function() {
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, width - scl);
    }
}