let canvas;
let gap = 25;
let isDone = false;
let lines = [];
let opacity_top = 255;
let opacity_bot = 0;
let rectPosY = 5;
let gallery_item, gallery;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  for (let i = 0; i<3; i++) {
    lines.push({
      x1: 0,
      y1: random(200, windowHeight),
      x2: width,
      y2: random(windowHeight),
      thickness: random(3, 16),
    });
  }

  gallery = new Gallery(40, 230, width);
  gallery.setup();
  gallery.display();
}

function draw() {
  background(255, 111, 97);

  drawWhiteTriangle();

  lines.forEach(line => {
    drawLine(line, true);
  });

  drawOrangeTriangle();

  lines.forEach(line => {
    drawLine(line, false);
  });

  if (!isDone && frameCount > 100) {
    opacity_top-=5;
    opacity_bot+=5;
    if (frameCount %5 == 0) gap++;
    if (frameCount %2 == 0) rectPosY++;
  }

  if (opacity_top == 0) isDone = true;

  drawRectangle();
  drawText();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  lines.forEach(line => {
    line.x2 = width;
  });
  gallery.update(width, height);
}

function drawLine(l, isBackground) {
  let offset = 0;
  if (isBackground) {
    offset = 4;
    stroke(230);
  } else {
    stroke(247, 224, 87);
  };
  strokeWeight(l.thickness);
  line(l.x1, l.y1+offset, l.x2, l.y2+offset);
}

function drawRectangle() {
  noStroke();
  fill(230);
  rect(43, rectPosY+3, 150, 150);
  fill(69, 181, 170);
  rect(40, rectPosY, 150, 150);
}

function drawWhiteTriangle() {
  noStroke();
  fill(255, 255, 245);
  triangle(0, -height/3, width, -height/3, 0, height);
}

function drawOrangeTriangle() {
  noStroke();
  fill(255, 111, 97);
  triangle(width, -height/3, width, height, 0, height);
}


function drawText() {
  noStroke();
  textSize(32);
  fill(255, 255, 255, opacity_top);
  text("julien", 50, 60);
  fill(255, 255, 255,);
  text("la", 50, 100);
  text("forge", 50 + gap, 100);
  fill(255, 255, 255, opacity_bot);
  text("du web", 50, 140);
}
