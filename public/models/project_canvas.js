class ProjectCanvas {
  constructor() {
  }

  create() {
    this.canvas = createCanvas(windowWidth, windowHeight);

  }

  show() {
    if (windowWidth < windowHeight) {
      this.canvas.position(0,0);
      resizeCanvas(windowWidth, 3*windowHeight/5);
    }
    else {
      this.canvas.position(2*windowWidth/5, 0);
      resizeCanvas(3*windowWidth/5, windowHeight);
    }
  }
}
