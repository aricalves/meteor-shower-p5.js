function SpaceShip() {
  this.x = 295;
  this.y = 580;
  this.width = 10;
  this.height = 10;
  this.color = [219, 57, 38];
  this.thrust = 3;

  this.display = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  this.move = function() {
    if (keyIsDown(65)) {
      this.x -= this.thrust;
    }
    if (keyIsDown(68)) {
      this.x += this.thrust;
    }
    if (keyIsDown(32)) {
      this.fireLaser();
    }
    if (keyIsDown(16)) {
    this.boostOn();
    } else {
      this.boostOff();
    }
  }

  this.boostOn = function() {
    this.thrust = 5;
  }

  this.boostOff = function() {
    this.thrust = 3;
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

  this.fireLaser = function() {
    laserBeams.push(new Laser());
  }


}
