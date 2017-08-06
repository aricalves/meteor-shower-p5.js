// Global Variables //
var ship;
var meteorShower = [];
var gravity = 2;
var laserBeams= [];
var paused = false;
/********************/

function setup() {
  noStroke();
  colorMode(HSB, 360, 100, 100, 1);
  createCanvas(600, 600);
  ship = new SpaceShip();
  for (let i = 0; i < 10; i++) {
    meteorShower.push(new Meteor());
  }
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

// Event Handlers //


//
// function keyPressed() {
//   if (keyCode == 65) { // A <--
//     ship.setDir(-1);
//   } else if (keyCode == 68) { // D -->
//       ship.setDir(1);
//   } else if (keyCode == 16) { //shift
//       ship.boostOn();
//   } else if (keyCode == 32) { // space
//       ship.fireLaser();
//   }
// }

// function keyReleased() {
//   if (keyCode == 65) { // A
//     ship.setDir(0);
//   } else if (keyCode == 68) { // D
//     ship.setDir(0);
//   } else if (keyCode == 16) { //shift
//     ship.boostOff();
//   }
// }

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
