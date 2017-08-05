var traffic = [];
var ySpeed = 0;
var xSpeed = 0;
var meteorShower = [];
var gravity = 1;

function setup() {
  noStroke();
  colorMode(HSB, 360, 100, 100, 1);
  createCanvas(600, 600);
  traffic.push(new Car());
  for (let i = 0; i < 100; i++) {
    meteorShower.push(new Meteor());
  }
}

function draw() {
  background(200, 100, 1, 1);
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].display();
    traffic[i].drive();
    traffic[i].borderWrap();
  }
  for (let i = 0; i < meteorShower.length; i++) {
    meteorShower[i].display();
    meteorShower[i].fall();
    meteorShower[i].deleteMeteor();
  }
}

function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function keyPressed () {
  if (keyCode == 32) {
    ySpeed = 0;
    xSpeed = 0;
    // space
  } else if (keyCode == 65) {
    xSpeed = -2;
    // A
  } else if (keyCode == 68) {
    xSpeed = 2;
    // D
  } else if (keyCode == 16) {
    xSpeed *= 1.5;
    ySpeed *= 1.5;
    //shift
  }
}

function mousePressed() {
  console.log(meteorShower.length);
}
