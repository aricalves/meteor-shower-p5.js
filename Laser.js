function Laser() {
  this.x = ship[0].x + 4;
  this.y = ship[0].y - 4;
  this.width = 2;
  this.height = 4;

  this.display = function() {
    fill(0, 0, 100, .9);
    rect(this.x, this.y, this.width, this.height);
  }

  this.trajectory = function() {
    this.y -= 5;
  }
}
