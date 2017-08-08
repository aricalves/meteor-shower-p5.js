function Meteor() {
  this.x = random(-150, 590);
  this.y = random(0, 100);
  this.height = 10;
  this.width = 10;
  this.color = [0, 200, 50, .5];

  this.display = function () {
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
