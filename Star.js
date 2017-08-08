function Star(y1, y2) {
  this.x = random(0, 600);
  this.y = random(y1, y2);
  this.width = random(0, 2);
  this.height = random(0, 2);
  this.color = [0, 0, 80, random(.2, .5)]

  this.display = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  this.fall = function() {
    if (this.y < 610) {
      this.y += speed;
    }
  }

  this.isOffScreen = function() {
    return (this.y > 600);
  }
}
