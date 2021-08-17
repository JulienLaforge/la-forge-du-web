let canvas;

let stars = new Array(1000);
let speed;
let size;

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.position(width, 0);

  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  size = width/300;
  speed = map(mouseX+width*2, width/2, width, 1, 10);
  background(51);
  translate(width/2, height/2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight);
  canvas.position(width, 0);
  size = width/300;
  speed = map(mouseX+width*2, width/2, width, 1, 10);
}
