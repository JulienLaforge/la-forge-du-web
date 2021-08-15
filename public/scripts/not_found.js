let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(255, 255, 245);
  drawTriangle(-height/4, width/4, 1);
  drawTriangle(-height/3, width/3, 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawTriangle(h_, w_, c_) {
  noStroke();
  c_ == 1 ? fill(255, 111, 97) : fill(247, 224, 87);
  triangle(width, h_, width, height, w_, height);
}
