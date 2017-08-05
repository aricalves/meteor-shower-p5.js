function Car() {
  this.x = 295;
  this.y = 580;
  this.width = 10;
  this.height = 10;
  this.color = [219, 57, 38];

  this.display = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  this.drive = function() {
    //this.y += ySpeed;
    this.x += xSpeed;

  }

  this.borderWrap = function () {
    if (this.x < -10) {
      this.x = 600;
      this.y = 580;
    } else if (this.x > 600) {
      this.x = 0;
      this.y = 580;
    }
  }


}
