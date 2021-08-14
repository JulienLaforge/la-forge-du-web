let gap = 25;

let opacity_top = 255;
let opacity_bot = 0;
let isDone = false;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(255, 255, 250);
  if (!isDone && frameCount > 100) {
    opacity_top-=5;
    opacity_bot+=5;
    if (frameCount %5 == 0) gap++;
  }
  if (opacity_top == 0) isDone = true;
  noStroke();
  textSize(32);
  fill(51, 51, 51, opacity_top);
  text("julien", 50, 60);
  fill(51, 51, 51);
  text("la", 50, 100);
  text("forge", 50 + gap, 100);
  fill(51, 51, 51, opacity_bot);
  text("du web", 50, 140);
}
