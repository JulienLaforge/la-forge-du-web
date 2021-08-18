class ProjectCanvas {
  constructor(renderer = P2D) {
    this.renderer = renderer;
  }

  create() {
    this.canvas = createCanvas(windowWidth, windowHeight, this.renderer);

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
