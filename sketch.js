// Global Variables //
var ship;
var meteorShower = [];
var gravity = 2;
var laserBeams = [];
var paused = false;
var rapidFire = false;
/********************/

function setup() {
  noStroke();
  colorMode(HSB, 360, 100, 100, 1);
  createCanvas(600, 600);
  ship = new SpaceShip();
  meteorInterval();
}

function draw() {
  background(200, 100, 1, 1);
  ship.display();
  ship.move();
  ship.borderWrap();
  for (let i = 0; i < laserBeams.length; i++) {
    laserBeams[i].display();
    laserBeams[i].trajectory();
    if (laserBeams[i].isOffScreen()) {
      laserBeams.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < meteorShower.length; i++) {
    meteorShower[i].display();
    meteorShower[i].fall();
    if (meteorShower[i].isOffScreen()) {
      meteorShower.splice(i, 1);
      i--;
    }
  }

}

function meteorInterval() {
  var interval = window.setInterval(shower , 500);
}

var shower = function() {
  meteorShower.push(new Meteor());
}

// Event Handlers //

function keyPressed() {
  if (!rapidFire && keyCode == 32) { // Space
    ship.fireLaser();
  }
}

function mousePressed() {
  if (paused) {
    paused = false;
    pauseGame();
  } else {
    paused = true;
    pauseGame();
  }
}

function pauseGame() {
  if (paused) {
    noLoop();
  } else {
    loop();
  }
}
