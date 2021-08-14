let gap = 25;

let opacity_top = 255;
let opacity_bot = 0;
let isDone = false;
let lines = [];
let line1, line2, line3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i<3; i++) {
    lines.push({
      x1: 0,
      y1: random(200, windowHeight),
      x2: width,
      y2: random(windowHeight),
      thickness: random(3, 16),
    });
  }
}

function draw() {
  background(255, 255, 245);
  drawRectangle();
  lines.forEach(line => {
    drawLine(line);
  });

  if (!isDone && frameCount > 100) {
    opacity_top-=5;
    opacity_bot+=5;
    if (frameCount %5 == 0) gap++;
  }
  if (opacity_top == 0) isDone = true;

  drawText();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  lines.forEach(line => {
    line.x2 = width;
  });

}

function drawRectangle() {
  noStroke();
  fill(255, 111, 97);
  triangle(width, -height/3, width, height, width/3, height);
}

function drawLine(l) {
  noStroke();
  stroke(247, 224, 87);
  strokeWeight(l.thickness);
  line(l.x1, l.y1, l.x2, l.y2);
}

function drawText() {
  noStroke();
  textSize(32);
  fill(69, 181, 170, opacity_top);
  text("julien", 50, 60);
  fill(69, 181, 170);
  text("la", 50, 100);
  text("forge", 50 + gap, 100);
  fill(69, 181, 170, opacity_bot);
  text("du web", 50, 140);
}
