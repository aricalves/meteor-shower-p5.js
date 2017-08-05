function Meteor() {
  this.x = getRandomValue(1, 590);
  this.y = getRandomValue(0, 300);
  this.height = 10;
  this.width = 10;
  this.color = 'red';

  this.display = function () {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  this.fall = function() {
    if (this.y < 600) {
      this.y += gravity;
    }
  }

  this.deleteMeteor = function() {
    for (let i = meteorShower.length; i >= 0; i--) {
      if (this.y > 599) {
        meteorShower.splice(meteorShower[i], 1);
      }
    }
  }

}
