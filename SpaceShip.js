function SpaceShip() {
  this.x = 295;
  this.y = 580;
  this.width = 10;
  this.height = 10;
  this.color = [219, 57, 75];
  this.thrust = 3;

  this.display = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  this.move = function() {
    if (keyIsDown(65)) { // A
      this.x -= this.thrust;
    }
    if (keyIsDown(68)) { // D
      this.x += this.thrust;
    }
    if (keyIsDown(16)) { // Shift
    this.boostOn();
    } else {
      this.boostOff();
    }
    if (keyIsDown(17)) { // Ctrl
      if (keyIsDown(32)) {
        ship.rapidFire();
      }
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

  this.rapidFire = function() {
    for (let i = 0; i < 10; i++) {
      laserBeams.push(new Laser());
    }
  }


}
