let canvas;
let infos;

let s;

function setup() {
  infos = new ProjectInfos("snake");
  canvas = createCanvas(600, 600);

  infos.create();
  checkWindow();
  s = new Snake();
}

function draw() {
  background(51);
  s.update();
  s.show();
}

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;

    this.update = function() {
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
    }

    this.show = function() {
      fill(255);
      rect(this.x, this.y, 10, 10);
    }
}

function checkWindow() {
  if (windowWidth < windowHeight) {
    canvas.position(0,0);
  }
  else {
    canvas.position(2*windowWidth/5, 0);
  }
  infos.show();
}

function windowResized() {
  checkWindow();
}
