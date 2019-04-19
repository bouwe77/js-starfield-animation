var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 200;

var numStars = 700;
var stars = [];
var size = 0.4;
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var speed = 6;

for (var i = 0; i < numStars; i++) {
  stars[i] = new Star();
}

function Star() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.z = Math.random() * canvas.width;

  this.move = function() {
    this.z = this.z - speed;
    if (this.z <= 0) {
      this.z = canvas.width;
    }
  };

  this.show = function() {
    var x, y, s;
    x = (this.x - centerX) * (canvas.width / this.z);
    x = x + centerX;

    y = (this.y - centerY) * (canvas.width / this.z);
    y = y + centerY;

    s = size * (canvas.width / this.z);

    c.beginPath();
    c.fillStyle = "white";
    c.arc(x, y, s, 0, Math.PI * 2);
    c.fill();
  };
}

function draw() {
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < numStars; i++) {
    stars[i].show();
    stars[i].move();
  }
}

function update() {
  draw();
  window.requestAnimationFrame(update);
}
update();
