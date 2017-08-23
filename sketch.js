// Global Variables //
var ship;
var speed;
var meteorX = 200;
var meteorShower = [];
var starField = [];
var laserBeams = [];
var paused = false;
/********************/

function setup() {

  noStroke();
  colorMode(HSB, 360, 100, 100, 1);
  createCanvas(600, 600);
  speed = 2;
  ship = new SpaceShip();

  for (let i = 0; i < 300; i++) {
    starField.push(new Star(0, 600));
  }
}

function draw() {

  background(200, 100, 1, 1);
  renderStarField();
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

  for (let i = 0; i < starField.length; i++) {
    starField[i].display();
    starField[i].fall();
    if (starField[i].isOffScreen()) {
      starField.splice(i, 1);
      i--;
    }
  }

}

var showerInterval = setInterval(renderMeteors, 100);

function renderStarField() {
  starField.push(new Star(0, 1));
}

function renderMeteors() {
  meteorShower.push(new Meteor(meteorX));
  if (meteorX < width + 10 && meteorX > -10) {
    meteorX += random(-50, 100);
  } else {
    meteorX = random(0, 500);
  }
}



// Event Handlers //

function keyPressed() {
  if (keyCode == 32) { // Space
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
