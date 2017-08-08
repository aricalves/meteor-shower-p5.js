function Laser() {
  this.x = ship.x + 4;
  this.y = ship.y - 4;
  this.width = 2;
  this.height = 4;

  this.display = function() {
    fill(0, 0, 100, .5);
    rect(this.x, this.y, this.width, this.height);
  }

  this.trajectory = function() {
    this.y -= 5;
  }

  this.isOffScreen = function() {
    return (this.y < -10);
  }

}
