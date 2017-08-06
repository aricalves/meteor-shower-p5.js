function Meteor() {
  this.x = random(1, 590);
  this.y = random(90, 100);
  this.height = 10;
  this.width = 10;
  this.color = 'red';

  this.display = function () {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  this.fall = function() {
    if (this.y < 610) {
      this.y += gravity;
    }
  }

  this.isOffScreen = function() {
    return (this.y > 600);
  }

}
