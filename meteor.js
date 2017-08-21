function Meteor(x) {
  this.x = x;
  this.y = -20;
  this.r = 5;
  this.diameter = (this.r * 2);
  this.color = [0, 170, 45, random(.35, .7)];

  this.display = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  this.fall = function() {
    if (this.y < height + 20) {
      this.y += (2 + speed/5);
    }
  }

  this.isOffScreen = function() {
    return (this.y > height + 10);
  }

  this.intersects = function(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r + 10);
  }

}
