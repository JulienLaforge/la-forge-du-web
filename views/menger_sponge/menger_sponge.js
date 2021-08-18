let canvas;
let infos;

let a = 0;
let b;
let sponge;
let nbClicks = 0;

function setup() {
  infos = new ProjectInfos("menger sponge");
  project = new ProjectCanvas(WEBGL);

  project.create();
  infos.create();
  checkWindow();
  createBox();
}

function createBox() {
  sponge = [];
  b = new Box(0, 0, 0, 200);
  sponge.push(b);
}

function draw() {
  background(51);
  // stroke(255);
  // noFill();
  lights();

  rotateX(a);
  rotateY(a*0.4);
  rotateZ(a*0.1);
  sponge.forEach(box => {
    box.show();
  });

  a += 0.01;
}

function mousePressed() {
  let next = [];
  nbClicks++;
  if (nbClicks < 4) {
    sponge.forEach(box => {
      let newBoxes = box.generate();
      newBoxes.forEach(newBox => {
        next.push(newBox);
      });
    });
    sponge = next;
  } else {
    createBox();
    nbClicks = 0;
  }
}

function checkWindow() {
  project.show();
  infos.show();
}

function windowResized() {
  checkWindow();
}
